// singleton design pattern

let instance = null;

class Singleton{
    constructor(){
        if(!instance){
            instance = this;
        }
        else{
            return instance;
        }
    }
}

const singletonA = new Singleton();
const singletonB = new Singleton();
console.log(singletonA === singletonB);


// factory design pattern 

class Car{
    constructor(model){
        this.model = model;
    }   
}

class CarFactory{
    createCar(model){
        return new Car(model);
    }
}

const factory = new CarFactory();
const car =  factory.createCar("Tesla");
const carB = factory.createCar("Thar Mahindra")
console.log(car);
console.log(carB);

// Module design pattern => Encapsulates private and public methods.

const Module = (() => {
    const privateVar = "Private";
    const privateMethod = () => console.log(privateVar);
  
    return {
      publicMethod: () => privateMethod()
    };
  })();
  
  Module.publicMethod(); // Private
  