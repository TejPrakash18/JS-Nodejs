const express = require("express");
const bodyParser =  require("body-parser");
require("dotenv").config();
const dataController = require("./controller/dataController");

const app =  express();

const PORT = 3000 || process.env.PORT;

app.use(bodyParser.json());

app.get('/data', dataController.getData);
app.post('/data', dataController.postData);
app.get('/data/:id',dataController.getDataById);
app.put('/data/:id',dataController.updateDataById);
app.delete('/data/:id', dataController.deleteDataById);

app.listen(PORT, ()=>{
    console.log('server is running....!', PORT)
})