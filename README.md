<p align="center">
<picture>
    <source srcset="https://uploads-ssl.webflow.com/63b5a9958fccedcf67d716ac/64662df3a5a568fd99e3600c_Squid_Pose_1_White-transparent-slim%201.png" media="(prefers-color-scheme: dark)">
    <img src="https://uploads-ssl.webflow.com/63b5a9958fccedcf67d716ac/64662df3a5a568fd99e3600c_Squid_Pose_1_White-transparent-slim%201.png" alt="Subsquid Logo">
</picture>
</p>

[![docs.rs](https://docs.rs/leptos/badge.svg)](https://docs.subsquid.io/)
[![Discord](https://img.shields.io/discord/1031524867910148188?color=%237289DA&label=discord)](https://discord.gg/subsquid)

[Website](https://subsquid.io) | [Docs](https://docs.subsquid.io/) | [Discord](https://discord.gg/subsquid)

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
| factory          | BINARY  | the `from` field in the creation trace             |
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
| factory          | STRING  | the `from` field in the creation trace             |
| init_code        | STRING  | initialization bytecode of contract                |
| code             | STRING  | bytecode of contract                               |
| init_code_hash   | STRING  | keccak hash of contract initialization code        |
| code_hash        | STRING  | Ckeccak hash of contract bytecode                  |

# Querying

List Objects in the bucket using AWS SDK. Prefixes represent block ranges.
Now you can query desired block range file using duck db:
`SELECT * FROM 'https://all-contracts-eth-hex.sqd-datasets.io/0000000000-0000646199/contracts.parquet';`

# Dataset Access

- `endpoint_url = 'https://7a28e49ec5f4a60c66f216392792ac38.r2.cloudflarestorage.com',`
- `aws_access_key_id = '37d38a72f67e6c2e6afae800b9ba8f1f',`
- `aws_secret_access_key = 'f5c86d7e82445f2b64bd9e260dbbc7fc2042126793149c1ab6c1d7b4672eb224'`

- Hexadecimal String Format

  - bucket name: all-contracts-hex
  - [http://all-contracts-eth-hex.sqd-datasets.io](http://all-contracts-eth-hex.sqd-datasets.io)

- Binary Format
  - bucket name: all-contracts-eth-v2
  - [http://all-contracts-eth-v2.sqd-datasets.io](http://all-contracts-eth-v2.sqd-datasets.io)
