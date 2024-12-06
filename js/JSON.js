//js object into JSON
const person = {
    name : "Tej",
    age : 23,
    isStudent : true,
    skills: ["JavaScript", "Java", "NodeJs", "Spring-boot"]
};

const jsonString =  JSON.stringify(person);
console.log(jsonString);

// JSON into js-object

const jsonStringUser= '{"name":"John","age":30,"isStudent":false}';

const personObject = JSON.parse(jsonStringUser);
console.log(personObject);
