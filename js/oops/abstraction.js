class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    // Abstract method
    start() {
        throw new Error("Method 'start()' must be implemented.");
    }

    getBrand() {
        return this.brand;
    }
}

// Concrete class
class Car extends Vehicle {
    start() {
        return `${this.brand} car is starting...`;
    }
}

// Usage
const myCar = new Car("Toyota");
console.log(myCar.getBrand()); // Output: Toyota
console.log(myCar.start());