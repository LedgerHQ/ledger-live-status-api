const express = require("express");
const morgan = require("morgan");
const compression = require("compression");

const data = require("./data");

const app = express();
const port = process.env.LL_STATUS_PORT || 3322;
const handler = () => console.log(`server started on port ${port}`); // eslint-disable-line no-console

app.use(compression());
app.use(morgan("common"));
app.get("/currencies-status", (req, res) =>
  res.send(data.filter(el => el.status === "KO"))
);
app.listen(port, handler);
