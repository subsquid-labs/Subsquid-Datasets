# Ethereum Contracts Dataset

This is a dataset of all historical NFT transfers.

# Usage

Some example uses of this dataset include:

- look up all NFTs transfered to an address
- analyze distribution of NFT transfers over time

# Schema

NFT transfers Dataset

| column           | type      | description                                        |
| ---------------- | --------- | -------------------------------------------------- |
| block_height     | INTEGER   | block number when contract was created             |
| transaction_hash | STRING    | hash of the transaction where contract was created |
| contract_address | STRING    | address of the deployed cotract                    |
| token_id         | STRING    | token id                                           |
| block_signed_at  | TIMESTAMP | timestamp                                          |
| succesfull       | BOOL      | if transaction was successful                      |
| value            | STRING    | transaction value                                  |
| gas_price        | STRING    | gas price at the time of transaction               |
| gas_spent        | STRING    | gas spent on transaction                           |
| fee_paid         | STRING    | fee paid by the user                               |

# Querying

List Objects in the bucket using AWS SDK. Prefixes represent block ranges.
Now you can query desired block range file using duck db:
`SELECT * FROM 'https://all-contracts-eth-hex.sqd-datasets.io/0000000000-0000646199/contracts.parquet';`

# Dataset Access

- `endpoint_url = 'https://7a28e49ec5f4a60c66f216392792ac38.r2.cloudflarestorage.com',`
- `aws_access_key_id = '1c0813c8e198be6695975d424fdeda05',`
- `aws_secret_access_key = '5276c800edd5049f6b6f10487e4e769e440db4e928d1f29cb7202b5158b49b74'`

- Bucket info

  - bucket name: all-nft-transfers-eth-test-v1
  - [https://nft-transfers.sqd-datasets.io](https://nft-transfers.sqd-datasets.io)
