const express = require("express");
const app = express();
const port = process.env.PORT || 3336;

app.listen(
  port,
  console.log(`Summon the Dark Lord! We are running on PORT ${port} !!!`)
);

app.get("/", (req, res) => {
  res.send("YAYER");
});
