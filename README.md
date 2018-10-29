# ledger-live-status-api

A tiny server that returns the list of cryptos, with eventually a "KO" status,
a message, and a link.

The purpose of this is to display a banner in LL, which inform users of infra
problems.

### Install

```bash
yarn
```

### Run

```bash
node src/index.js
```

the default port is `3322`

### Endpoints

```bash
/currencies-status
```

Sample result:

```
[
  {"id":"aion","status":"OK","message":"","link":"","nonce":0},
  {"id":"akroma","status":"OK","message":"","link":"","nonce":0},
  {"id":"ark","status":"OK","message":"","link":"","nonce":0},
  {"id":"atheios","status":"OK","message":"","link":"","nonce":0},
  {"id":"banano","status":"OK","message":"","link":"","nonce":0},
  {"id":"bitcoin","status":"OK","message":"","link":"","nonce":0},
  {"id":"bitcoin_cash","status":"OK","message":"","link":"","nonce":0},
  {"id":"bitcoin_gold","status":"OK","message":"","link":"","nonce":0},
  {"id":"bitcoin_private","status":"OK","message":"","link":"","nonce":0}
  ...
]
```
