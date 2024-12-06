const Student = {
    fName :"Tej",
    lName: "Upadhyay",
    age : 23,
    email: "tej22upa.dhyay@",
    printStudentDetails :function(){
        return (`${this.fName}, ${this.lName}, ${this.age}, ${this.email}`)
    }
};

console.log(Student.fName);
let studetDetails = Student.printStudentDetails();
console.log(studetDetails);

// object in objects

const user = {
    userName:"tej07",
    fullName:{
        fName: "Tej",
        lName: "Upadhyay"
    }
}

console.log(user.fullName.fName);

//object de-structuring

const member = {userName: "Tej", age: 23};
const {userName,age} = member;
console.log(userName, age)