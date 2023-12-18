class Car{
    constructor(name,color){
        this.name = name;
        this.color = color;
    }

    P(){
        return this.name+" "+this.color;
    }
}

let car1 = new Car("Hero","black");
console.log(car1.P());