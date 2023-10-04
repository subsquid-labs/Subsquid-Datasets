import { lookupArchive } from "@subsquid/archive-registry";
import {
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  Log as _Log,
  Transaction as _Transaction,
} from "@subsquid/evm-processor";
import * as busdc from "./abi/busdc";
export const processor = new EvmBatchProcessor()
  .setDataSource({
    // Change the Archive endpoints for run the squid
    // against the other EVM networks
    // For a full list of supported networks and config options
    // see https://docs.subsquid.io/evm-indexing/
    archive: lookupArchive("binance"),
    // Must be set for RPC ingestion (https://docs.subsquid.io/evm-indexing/evm-processor/)
    // OR to enable contract state queries (https://docs.subsquid.io/evm-indexing/query-state/)
    chain: "https://rpc.ankr.com/bsc",
  })
  .setFinalityConfirmation(75)
  .setFields({
    transaction: {
      from: true,
      to: true,
      value: true,
      hash: true,
    },
  })
  .setBlockRange({
    from: 0,
  })
  .addLog({
    address: ["0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"],
    topic0: [busdc.events.Transfer.topic],
    transaction: true,
  });

export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
