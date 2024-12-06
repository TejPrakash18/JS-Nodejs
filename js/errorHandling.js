try {
    dadAlert("Welcoe.....!")
} catch (error) {
    console.log(error);
}

function geekFunc() {
    let a = 10;
    try {
        console.log("Value of variable a is : " + a);
    }
    catch (e) {
        console.log("Error: " + e.description);
    }
}
geekFunc();

try {
    throw new Error("ohhh oops...!")
} catch (e) {
    console.log(e);
}
finally{
    console.log("finally block is always execute")
}
console.log("code successfully run");