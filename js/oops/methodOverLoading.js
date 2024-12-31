// class Calculator {
//     add(a, b) { // This is overwritten by the next add method
//         return a + b;
//     }
//     add(a, b, c) { // This replaces the first add method
//         return a + b + c;
//     }
// }

// const cals = new Calculator();
// console.log(cals.add(2,3));
// console.log(cals.add(2,3,4))


class Calculator {
    add(...args) {
        if (args.length === 2) {
            return args[0] + args[1];
        } else if (args.length === 3) {
            return args[0] + args[1] + args[2];
        } else {
            throw new Error("Invalid number of arguments");
        }
    }
}

const cal = new Calculator();
console.log(cal.add(2, 6));       // 8
console.log(cal.add(2, 3, 4));    // 9
