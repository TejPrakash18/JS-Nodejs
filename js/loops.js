// let number = 1;
for (let number = 1; number <= 10; number++) {
    console.log(number);
    
}
let person = {fname: "Tej", lname:"Upadhyay", age:23}
for (let key in person) {
    console.log(person[key])
}

const cars = ["Mahindra BE 6e", "BMW", "Honda"];
for (const element of cars) {
    console.log(element)
}


// while or do-while loops
let i = 1;
while(i<=10){
    console.log(i)
    i++;
}

let number = 5
do{
    console.log(number);
}while(number >= 6);

// break and conditinue keyword

for(let i=1; i<=10; i++){
    console.log(i);
    if(i==5){
        break;
    }
}

for(let i=1; i<=10; i++){
    if(i==5){
        continue;
    }
    console.log(i);

}