class shape {
    area(){
        console.log("Display shape area!")
    }
}

class Tringle extends shape{
    area(a,b){
        console.log((1/2)*a*b)
    }
}

const tringle = new Tringle();
const tringleA = new shape();
tringleA.area();
tringle.area(4,5);