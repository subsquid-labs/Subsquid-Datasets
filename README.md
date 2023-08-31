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
| factory          | BINARY  | the from field in the creatio trace                |
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
| factory          | STRING  | the from field in the creatio trace                |
| init_code        | STRING  | initialization bytecode of contract                |
| code             | STRING  | bytecode of contract                               |
| init_code_hash   | STRING  | keccak hash of contract initialization code        |
| code_hash        | STRING  | Ckeccak hash of contract bytecode                  |

# Querying

# Documentation and Useful Links

- [How To Create a Squid](https://docs.subsquid.io/tutorials/)
- [How To Query a Squid](https://docs.subsquid.io/query-squid/)
- [How To Deploy a Squid](https://docs.subsquid.io/deploy-squid/)
- [How To query a Squid From an Application](https://thegraph.com/docs/en/querying/querying-from-an-application/)
- [How to Create a Squid for EVM chains](https://docs.subsquid.io/examples/evm/)
- [How to Use Subsquid with Substrate](https://docs.subsquid.io/examples/substrate/)
- [Subsquid vs The Graph](https://docs.subsquid.io/migrate/subsquid-vs-thegraph/)
- [Supported Networks](https://docs.subsquid.io/evm-indexing/supported-networks/)
- [Giant Squid API](https://docs.subsquid.io/giant-squid-api/)
- [Developer FAQs](https://docs.subsquid.io/faq/)

# Tutorials

- [Subsquid Basics](https://docs.subsquid.io/basics/)
- [How to Index Bored Ape Yacht Club NFTs](https://docs.subsquid.io/tutorials/bayc/)
- [How to Create a Simple Substrate Squid](https://docs.subsquid.io/tutorials/create-a-simple-squid/)
- [How to Index ink! Contract with Subsquid](https://docs.subsquid.io/tutorials/create-a-wasm-processing-squid/)
- [How to Build Full-Stack NFT Marketplace with Subsquid](https://www.youtube.com/watch?v=Kt8qDmREDKU&ab_channel=subsquid)
- [Subsquid Academy](https://www.youtube.com/watch?v=x4fEP0KJ3OE&list=PLH2948XqklrgTvG6-ro3eqS17j7n_raiN&ab_channel=subsquid)
- [How to Streamline Cross-Chain and EVM Processing with Subsquid](https://academy.moonbeam.network/p/moonbeam-subsquid)
- [How to Build Defi Dashaboard using Subsquid](https://www.youtube.com/watch?v=KVabPQqdKno&ab_channel=subsquid)
- [How to Analyze Lens Protocol using Subsquid SDK](https://www.youtube.com/watch?v=6xAEEwlNm4E&ab_channel=subsquid)

# GitHub Repositories

- [Sample Squid Indexing Transactions To and From vitalik.eth](https://github.com/subsquid-labs/evm-transactions-example)
