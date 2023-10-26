import { TypeormDatabase } from "@subsquid/typeorm-store";
import { Transaction } from "./model";
import { processor } from "./processor";
import { Database } from "@subsquid/file-store";
import * as busdc from "./abi/busdc";
import { S3Dest } from "@subsquid/file-store-s3";
import { Column, Table, Types } from "@subsquid/file-store-parquet";
const dbOptions = {
  tables: {
    TransfersTable: new Table(
      "transfers.parquet",
      {
        from: Column(Types.String()),
        to: Column(Types.String()),
        tx_hash: Column(Types.String()),
        value: Column(Types.String()),
        timestamp: Column(Types.Int64()),
        block_number: Column(Types.Int64()),
      },
      {
        compression: "GZIP",
        rowGroupSize: 300000,
        pageSize: 1000,
      }
    ),
  },
  dest: new S3Dest(
    "./",
    "busdc-transfers", //assertNotNull(process.env.S3_BUCKET_NAME),
    {
      region: "us-east-1",

      endpoint: "ENDPOINT_URL",
      credentials: {
        accessKeyId: "ACCESS_KEY_ID", //accessKeyId: assertNotNull(process.env.S3_ACCESS_KEY_ID),
        secretAccessKey: "SECRET_KEY", // secretAccessKey: assertNotNull(process.env.S3_SECRET_ACCESS_KEY)
      },
    }
  ),
  chunkSizeMb: 10,
};

processor.run(new Database(dbOptions), async (ctx) => {
  const transactions = [];
  for (let c of ctx.blocks) {
    for (let log of c.logs) {
      // decode and normalize the tx data
      let { from, to, value } = busdc.events.Transfer.decode(log);
      if (value != BigInt(0)) {
        transactions.push({
          block_number: BigInt(c.header.height),
          from: from,
          to: to || "0x",
          timestamp: BigInt(c.header.timestamp),
          value: value.toString(),
          tx_hash: log.transaction?.hash || "0x",
        });
      }
    }
  }
  // apply vectorized transformations and aggregations

  // upsert batches of entities with batch-optimized ctx.store.save
  await ctx.store.TransfersTable.writeMany(transactions);
});
