const express = require ('express');
const app = express();
const route = require('./route');

app.use("/swapi" , route);


app.listen(4000 , () => console.log("Server started at port 4000"));
