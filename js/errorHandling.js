// try {
//     dadAlert("Welcoe.....!")
// } catch (error) {
//     console.log(error);
// }

// function geekFunc() {
//     let a = 10;
//     try {
//         console.log("Value of variable a is : " + a);
//     }
//     catch (e) {
//         console.log("Error: " + e.description);
//     }
// }
// geekFunc();

// try {
//     throw new Error("ohhh oops...!")
// } catch (e) {
//     console.log(e);
// }
// finally{
//     console.log("finally block is always execute")
// }
// console.log("code successfully run");

const divide = (a, b) => {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        let result = a / b;
        return result;
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Division operation attempted.");
    }
};

console.log(divide(5,0))