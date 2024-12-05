//ternary operators
let age = 18
let result = (age>=18) ? "You are adult" : "not adult"
console.log("Result is :", result)

// if or if-else

// if
let ageIs = 18
let gender = "female"
if(ageIs >=18 && gender == "female"){
    console.log("you can vote, and please stand out in the ledies line :)")
}

// if- else

if(ageIs >= 18 && gender !== "female"){
    console.log("you can vote, and please stand out with man's line")
}
else{
    console.log("you can not vote, please left out here sorry better luck next time :)")
}


//if-else ladder

let ageAboveIs = 18;
let genderIs = "female";

if (ageAboveIs >= 18 && gender !== "female") {
    console.log("You can vote, and please stand out in the ladies' line :)");
} else if (ageAboveIs <= 19 && genderIs === "female") {
    console.log("You can vote, and please stand in the men's line");
} else {
    console.log("You cannot vote, please step aside. Sorry, better luck next time :)");
}



let a = 2;
switch(a){
    case 1: a = "one";
    break;
    case 2: a = "two";
    break;
    case 3: a = "three";
    break;
    default: a = "No match found";
    break;
}
console.log(a);
