class GoogleForm {

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
studentOne.fill("Tej","tej22upa.dhyay@gmail.com","8765432110","Iglas, Aligarh (up)")
studentOne.submit();
studentOne.cencel();