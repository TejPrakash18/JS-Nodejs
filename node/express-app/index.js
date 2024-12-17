const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3000;


app.get('/',(req,res) =>{
    res.setHeader("Contant-Type", "application/json")
    res.status(200).send(JSON.stringify({title:"Home", message:"hello, this is home page"}));
})

app.post('/', (req, res)=>{
    const {name} = req.body;
    
    res.send(`Welcome ${name}`);
})


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);