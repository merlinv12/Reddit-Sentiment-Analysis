const express = require("express");
const { spawn, exec } = require("child_process");
const controllers = require('./controllers/sentAnalysis.js')
const bodyParser = require("body-parser");
const PORT = 3333;

const app = express();
app.use(bodyParser());
app.use(express.static(`${__dirname}/../public`));

app.post("/api/username/", (req, res) => {
  controllers(req.body.username)
  .then(data => res.status(202).send(data))
});

app.listen(PORT, console.log(`Server is now listening on ${PORT}`));
