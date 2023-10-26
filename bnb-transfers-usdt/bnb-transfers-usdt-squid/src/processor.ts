import { lookupArchive } from "@subsquid/archive-registry";
import {
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  Log as _Log,
  Transaction as _Transaction,
} from "@subsquid/evm-processor";
import * as busdt from "./abi/busdt";
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
    from: 176410,
  })
  .addLog({
    address: ["0x55d398326f99059fF775485246999027B3197955"],
    topic0: [busdt.events.Transfer.topic],
    transaction: true,
  });

export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
