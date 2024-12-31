console.log("Interval..!")

function hello(user){
    console.log(`hello, ${user}`)
}

setTimeout(hello, 2000, "Tej");

function greet(name) {
    console.log(`Hello, ${name}!`);
}

setInterval(greet, 3000, "Tej");
// Output every 3 seconds: Hello, Tej!


