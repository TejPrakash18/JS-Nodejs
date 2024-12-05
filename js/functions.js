// named function

function greet(name){
    return `Hello ${name}`;
}

console.log(greet("Tej"));

// anonymous functios

const sum = function(a,b){
    return a+b;
}

let answer = sum(5,6);
console.log(answer);


// Arrow function
const multiply = (a,b) => a*b;
console.log(multiply(3,5));

const wish = (userName)=>{
    return `Good morning ${userName}`;
};
let sms = wish("Tej");
console.log(sms);


// constructor function

function Person(name,age){
    this.name = name;
    this.age = age;
}
const person1 = new Person("Tej", 24);
console.log(person1.name, person1.age);

// higher order function

function higherOrderFunction(data){
    return data(5,3);
}
function data(a,b){
    return a+b;
}
console.log(higherOrderFunction(data));

// callback function

function fetchData(fetch){
    console.log("fetching data.....!");
    fetch("data received");
}

fetchData(data => console.log(data));