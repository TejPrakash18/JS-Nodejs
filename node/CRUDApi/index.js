const express = require("express");
const bodyParser =  require("body-parser");
require("dotenv").config();
const dataController = require("./controller/dataController");

const app =  express();

const PORT = 3000 || process.env.PORT;

app.use(bodyParser.json());

app.get('/data', dataController.getData);
app.post('/data', dataController.postData);
// app.get('/data/:id',dataController.getByIdData);
// app.put('/data/:id',dataController.updateData);
// app.delete('/data/:id', dataController.deleteData);

app.listen(PORT, ()=>{
    console.log('server is running....!', PORT)
})