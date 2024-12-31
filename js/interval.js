function greet(name) {
    console.log(`Hello, ${name}!`);
}

setInterval(greet, 3000, "Bob");
// Output every 3 seconds: Hello, Bob!
