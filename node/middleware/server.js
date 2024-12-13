const http = require("http");

const server = http.createServer((req ,res) =>{
    res.statusCode = 200;


    if(req.url ==='/'){
        res.setHeader("Contant-Type", "application/json");
        res.end(JSON.stringify({title:"Home", message:"this is home page"}));
    }
    else{
        res.statusCode= 404;
        res.setHeader("contant-type", 'application/json');
        res.end(JSON.stringify({title:'not found', message:'page not found'}));
    }
});

server.listen(5001, '127.0.0.1' ,()=>{
    console.log(`server at running at the point http://127.0.0.1:5001`)
});