const http = require("http");

const server = http.createServer((req, res) => {
    res.statusCode = 200;

    if (req.url === '/') {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ title: "home", message: "this is home page" }));
    } else if (req.url === '/about') {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ title: "about", message: "this is about page" }));
    } else if (req.url === '/contact') {
        res.setHeader("Content-Type", "text/html");
        res.end('<h1>Hello: 0987654321</h1>');
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log(`Server is running at http://127.0.0.1:3000/`);
});
