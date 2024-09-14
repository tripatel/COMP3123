// Car class
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    
    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

// Sedan subclass extending Car
class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year); // Call the parent class constructor
        this.balance = balance;
    }
    
    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}

// Example usage
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());


const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());
