


const letters = new Set(["T", "e", "j"]);
letters.add("u")
console.log(letters);
for (const letter of letters) {
    if (letter === "e") {
        console.log(letter);
        break; // Stop the loop once the desired element is found
    }
}


// map -> map has contains key-value pair

const fruits = new Map([
    ["Mango", 110],
    ["Banana", 40],
    ["Gauva", 20]
]);
fruits.set("oranges", 60);

console.log(fruits.get("oranges"));
