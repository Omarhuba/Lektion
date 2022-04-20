
class Car {
    constructor(color,logo,price){
        this.color = color
        this.logo  = logo
        this.price = price
    }

    run(car){
        return `${car} has ${this.color} ${this.logo} and price is :${this.price} `
    }

}

const newCar = new Car('yellow', 'volvo', '10000$')
console.log(newCar);