const express = require("express");
const app = express();
const port = process.env.PORT || 6661;
const queries = require('./queries')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.listen(port, console.log(`Summon the Dark Lord! We are running on PORT ${port} !!!`))
app.get("/", (req, res) => {
  queries.listAll().then(bands => res.send(bands))
})
app.delete('/:id', (req, res) => {
  queries.deleteBand(req.params.id).then(res.sendStatus(204))
})
app.put('/:id', (req, res) => {
  queries.updateBand(req.params.id, req.body)
    .then(band => res.json(band))
})
app.post('/', (req, res) => {
  queries.createBand(req.body).then(res.sendStatus(201))
})
app.get("/:id", (req, res) => {
  queries.getById(req.params.id).then(bands => res.send(bands))
})