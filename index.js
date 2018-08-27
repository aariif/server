const express = require("express")
const app = express();

app.get(('/'), (req, res) => {
  res.send({name: 'Shahreen'});
});

app.listen(process.env.PORT || 5000 ,function(){
    console.log("up and running on port "+process.env.PORT);
});
