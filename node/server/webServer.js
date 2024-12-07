const http = require("http");

const myServer = http.createServer((req, res) => {
    console.log(req.headers)
    res.end("server")
})

myServer.listen(8080, ()=> console.log("server started !"))