<p align="center">
<picture>
    <source srcset="https://uploads-ssl.webflow.com/63b5a9958fccedcf67d716ac/64662df3a5a568fd99e3600c_Squid_Pose_1_White-transparent-slim%201.png" media="(prefers-color-scheme: dark)">
    <img src="https://uploads-ssl.webflow.com/63b5a9958fccedcf67d716ac/64662df3a5a568fd99e3600c_Squid_Pose_1_White-transparent-slim%201.png" alt="Subsquid Logo">
</picture>
</p>

[![docs.rs](https://docs.rs/leptos/badge.svg)](https://docs.subsquid.io/)
[![Discord](https://img.shields.io/discord/1031524867910148188?color=%237289DA&label=discord)](https://discord.gg/subsquid)

[Website](https://subsquid.io) | [Docs](https://docs.rs/leptos/badge.svg) | [Discord](https://discord.gg/subsquid)

# Ethereum Contracts Dataset

This is a dataset of all historical contract deployments.

# Usage

Some example uses of this dataset include:

- look up all contracts deployed by an address
- look up all contracts that have a given bytecode
- analyze distribution of contract bytecode motifs

# Schema

Bin Format Contracts Dataset

| column           | type    | description                                        |
| ---------------- | ------- | -------------------------------------------------- |
| block_number     | INTEGER | block number when contract was created             |
| create_index     | INTEGER | transaction index                                  |
| kind             | INTEGER | ERC contract type determined by ducktyping         |
| transaction_hash | BINARY  | hash of the transaction where contract was created |
| contract_address | BINARY  | address of the deployed cotract                    |
| deployer         | BINARY  | EOA that deployed the contract                     |
| factory          | BINARY  | the `from` field in the creatio trace              |
| init_code        | BINARY  | initialization bytecode of contract                |
| code             | BINARY  | bytecode of contract                               |
| init_code_hash   | BINARY  | keccak hash of contract initialization code        |
| code_hash        | BINARY  | Ckeccak hash of contract bytecode                  |

Hex Format Contracts Dataset

| column           | type    | description                                        |
| ---------------- | ------- | -------------------------------------------------- |
| block_number     | INTEGER | block number when contract was created             |
| create_index     | INTEGER | transaction index                                  |
| kind             | INTEGER | ERC contract type determined by ducktyping         |
| transaction_hash | STRING  | hash of the transaction where contract was created |
| contract_address | STRING  | address of the deployed cotract                    |
| deployer         | STRING  | EOA that deployed the contract                     |
| factory          | STRING  | the `from` field in the creatio trace              |
| init_code        | STRING  | initialization bytecode of contract                |
| code             | STRING  | bytecode of contract                               |
| init_code_hash   | STRING  | keccak hash of contract initialization code        |
| code_hash        | STRING  | Ckeccak hash of contract bytecode                  |

# Querying

List Objects in the bucket using AWS SDK. Prefixes represent block ranges.
Now you can query desired block range file using duck db:
`SELECT * FROM 'https://all-contracts-eth-hex.sqd-datasets.io/0000000000-0000646199/contracts.parquet';`

# Dataset URLS

    Hexadecimal String Format

- [http://all-contracts-eth-hex.sqd-datasets.io](http://all-contracts-eth-hex.sqd-datasets.io)

  Binary Format

- [http://all-contracts-eth-v2.sqd-datasets.io](http://all-contracts-eth-v2.sqd-datasets.io)
