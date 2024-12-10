require("dotenv").config();

const http = require("http");
const fs = require("fs");


const myServer = http.createServer((req, res) => {
    res.header = 200;
    const log = `${Date.now()}: new req is coming + " " +  ${res.header}\n`;
    fs.appendFile('log.txt', log, (err, data)=>{
        console.log("this is the node project");
        console.log("this is new line");

        console.log(process.env.NAME);
        console.log(process.env.PROFESSION);
        console.log("I am starting a new series on ",process.env.COURSE);
        res.end("Hello Server!")
    })
    
})

myServer.listen(8080, ()=> console.log("server started !"));