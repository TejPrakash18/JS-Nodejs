

//Parent Class - Base Class
class Animal {
    constructor(name, color , age) {
        this.name = name
        this.color = color
        this.age = age
    }
    run() {
        console.log(this.name + ' is running')
    }

    shout() {

        console.log(this.name + ' is shouting')
    }

    sleep() {
        console.log(this.name + ' is sleeping')
    }
}

//Child Class - Derived Class
class Monkey extends Animal{
    eatBanana() {
        console.log(this.name + ' is eating banana')
    }
    //you can also add new methods
    hide() {
        console.log(this.name + ' is hiding')
    }
}

const animal_1 = new Monkey('Simba monkey', 'Brown', 2)

const animal_2 = new Animal('Donkey', 'White', 3)

animal_1.eatBanana()
animal_1.run()
animal_1.hide()

animal_2.shout()
