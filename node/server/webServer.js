const http = require("http");
const fs = require("fs");


const myServer = http.createServer((req, res) => {
    res.header = 200;
    const log = `${Date.now()}: new req is coming + " " +  ${res.header}\n`;
    fs.appendFile('log.txt', log, (err, data)=>{
        console.log(req.headers)
        res.end("Hello Server!")
    })
    
})

myServer.listen(8080, ()=> console.log("server started !"))