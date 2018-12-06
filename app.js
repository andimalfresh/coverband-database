const express = require("express");
const app = express();
const port = process.env.PORT || 6661;
const queries = require('./queries')

app.listen(
  port,
  console.log(`Summon the Dark Lord! We are running on PORT ${port} !!!`)
);

app.get("/", (req, res) => {
  queries.listAll().then(bands => {
    res.send(bands)
  })
});