const express = require("express")
const app = express();

app.get(('/'), (req, res) => {
  res.send({name: 'Zahra'});
});

app.listen(5000);
