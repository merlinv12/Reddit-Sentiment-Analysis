const express = require("express");
const { spawn, exec } = require("child_process");
const controllers = require('./controllers/sentAnalysis.js')
const db = require('./database/db.js')
const bodyParser = require("body-parser");
const PORT = 3333;

const app = express();
app.use(bodyParser());
app.use(express.static(`${__dirname}/../public`));

app.post("/api/username/", (req, res) => {
  controllers(req.body.username)
  .tap(data => db.insertCommentsFromUser(data)).then(console.log('Added to DB')).catch(err => console.log(err))
  .then(data => res.status(202).send(data))
  .catch(err => console.log(err))

});

app.put("/api/comments/:id", (req, res) => {
  console.log(req.body)
  db.updateCommentUserInput(req.params.id, req.body)
  .then(data => res.status(202).send(data))
  .catch(err => console.log(err))
}) 

app.listen(PORT, console.log(`Server is now listening on ${PORT}`));
