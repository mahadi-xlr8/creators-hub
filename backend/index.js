const express=require('express')
const db=require('./database')
const app = express();

app.get("/creators/name", (req, res) => {
  db.getName()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => console.log(err));
});

const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`listening on port ${port}...`));
