function greet(name , callback){
    console.log("hello", name)
    callback();
}

function sayGoodBye(){
    console.log("bye")
}

greet("alice",sayGoodBye)

function myDisplayed(calculator){
    console.log("Loading....!")
    let answer = calculator(2,3);
    console.log("load data successfully", answer);
}

function calculator(num1, num2){
    return num1+num2;
}

myDisplayed(calculator);