const express = require ('express');
const app = express();

const book = require('./book');
app.use(express.json());

var authValue = "Bearer 123456789"

app.use('/api', book)
   


app.listen(4000 , () => console.log("Server started at port 4000"));
