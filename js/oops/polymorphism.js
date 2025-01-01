class Animal{
    makeSound(){
        console.log("the animal sound like this!")
    }
}

class Dog extends Animal{
    makeSound(){
        console.log("the Dog barks!")
    }
}
class Cat extends Animal{
    makeSound(){
        console.log("the cat meows!")
    }
}

function makeSound(animal){
    animal.makeSound();
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

makeSound(animal);
makeSound(dog);
makeSound(cat);