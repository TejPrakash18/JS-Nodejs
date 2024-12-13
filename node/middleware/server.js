const http = require("http");

const server = http.createServer((req ,res) =>{
    res.statusCode = 200;

    switch(req.method){
        case "GET":
            getReq(req,res);
            break;
        case "POST":
            postReq(req,res);
            break;
    }
});

server.addListener(5001, '127.0.0.1' ,()=>{
    console.log(`server at running at the point http://127.0.0.1`)
})