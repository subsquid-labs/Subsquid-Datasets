# Ethereum Contracts Dataset

This is a dataset of all historical USDT transfers on Binance Smart Chain.

# Usage

Some example uses of this dataset include:

- look up USDT amounts transferred to an address
- analyze distribution of USDT transfers over time

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
- `aws_access_key_id = '4836dd55b4430430496abc240a56cd41',`
- `aws_secret_access_key = '2ac5990e5e6416be916dd4accb77cc158426285cd8552a14d6d5a52d6a65630c'`

- Bucket info

  - bucket name: busdt-transfers
  - [https://busdt-transfers.sqd-datasets.io](https://busdt-transfers.sqd-datasets.io)
