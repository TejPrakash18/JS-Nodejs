console.log("Interval..!")

function hello(user){
    console.log(`hello, ${user}`)
}

setTimeout(hello, 2000, "Tej");

function greet(name) {
    console.log(`Hello, ${name}!`);
}

setInterval(greet, 3000, "Tej", clearInterval());
// Output every 3 seconds: Hello, Tej!


let timer = setInterval(() => console.log("Running..."), 2000);
setTimeout(() => clearInterval(timer), 7000); // Stops after 7 seconds


let count = 0;
let intervalID = setInterval(() => {
    console.log(`Count: ${count}`);
    count++;
    if (count === 5) clearInterval(intervalID); // Stop after 5 iterations
}, 1000);
