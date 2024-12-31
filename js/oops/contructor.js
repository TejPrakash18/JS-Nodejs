//@desc a special function that create and initialize objects, setting their initial state and properties, and set as default value
// @desc a one class have only one contructor 
// constructor are 3 type3 (1. non-parameters-constructor, 2. parameteres-constructor, 3. copy-constructor)

class GoogleForm {

    // @desc non-parametered contructor
    // constructor() {
    //     this.userName = "Tej";
    //     this.email = "tej@gmail.com";
    //     this.phoneNumber = "00000000000";
    //     this.address= "...!!!!....."
    // }

    // @desc parametered contructor
    constructor(userName, email,phoneNumber,address) {
        this.userName = userName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address= address;
    }

    fill(userName, email, phoneNumber, address){
        this.userName = userName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    submit(){
        console.log("name is "+this.userName + " and email "+ this.email + " and contact " + this.phoneNumber + " or address" + this.address);
    }

    cencel(){
        console.log("clear information!")
    }
    
}

const studentOne = new GoogleForm();
console.log("via non-parameters contructor..!")
studentOne.submit();

console.log("via parameter constructor..!")
const studentTwo = new GoogleForm("Neha", "neha07@gmail.com", "098765678", "Hathras")
studentTwo.submit();

console.log("via a function!")
studentOne.fill("Tej","tej22upa.dhyay@gmail.com","8765432110","Iglas, Aligarh (up)")
studentOne.submit();

studentOne.cencel();