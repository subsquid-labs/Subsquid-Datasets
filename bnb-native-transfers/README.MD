# Ethereum Contracts Dataset

This is a dataset of all historical BNB transfers on Binance Smart Chain.

# Usage

Some example uses of this dataset include:

- look up BNB amounts transferred to an address
- analyze distribution of BNB transfers over time

# Schema

NFT transfers Dataset

| column       | type   | description       |
| ------------ | ------ | ----------------- |
| from         | STRING | sender address    |
| to           | STRING | receiver address  |
| tx_hash      | STRING | transaction hash  |
| value        | STRING | value transferred |
| timestamp    | INT64  | timestamp         |
| block_number | INT64  | block number      |

# Querying

List Objects in the bucket using AWS SDK. Prefixes represent block ranges.
Now you can query desired block range file using duck db:
`SELECT * FROM 'https://all-contracts-eth-hex.sqd-datasets.io/0000000000-0000646199/contracts.parquet';`

# Dataset Access

- `endpoint_url = 'https://7a28e49ec5f4a60c66f216392792ac38.r2.cloudflarestorage.com',`
- `aws_access_key_id = '1f25ab4babdb705e3f184709dc88c837',`
- `aws_secret_access_key = '0e853ebdf7872e96cb845f64237c14f1c29131c09565b5a610923526aea06791'`

- Bucket info

  - bucket name: bnb-transfer-values
  - [https://bnb-transfers.sqd-datasets.io](https://bnb-transfers.sqd-datasets.io)
