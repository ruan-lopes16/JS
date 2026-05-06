// 1

const calculator = {
  a: 10,
  b: 5,

  sum() {
    return this.a + this.b;
  },

  subtract(){
    return this.a - this.b
  },

  multiply(){
    return this.a * this.b
  }
}

console.log("Exercise 1 results:")
console.log(calculator.sum())       // 15
console.log(calculator.subtract())  // 5
console.log(calculator.multiply())  // 50

// 2
class Temperature {
  constructor(celsius) {
    this.celsius = celsius
  }

  get fahrenheit() {
    return this.celsius * 9/5 + 32
    // converta e retorne
  }

  set setFahrenheit(f) {
    this.celsius = (f - 32) * 5/9
    // converta e atualize this.celsius
  }
}

console.log("Exercise 2 results:")
const t = new Temperature(0)
console.log(t.fahrenheit)   // 32
t.setFahrenheit = 212
console.log(t.celsius)      // 100

// 3
function Car(brand, model, year) {
  // inicialize as propriedades
  this.brand = brand
  this.model = model
  this.year = year
}

Car.prototype.describe = function() {
  // exiba: "Brand Model (Year)"
  console.log(`${this.brand} ${this.model} (${this.year})`)
}

const car1 = new Car("Toyota", "Corolla", 2020)
const car2 = new Car("Honda", "Civic", 2022)

console.log("Exercise 3 results:")
car1.describe()  // Toyota Corolla (2020)
car2.describe()  // Honda Civic (2022)

// 4
class BankAccount {
  constructor(initialBalance) {
    this.balance = initialBalance
  }

  set deposit(value) {
    if(value <= 0){
        throw new Error("error, insufficient funds ")
        
    }

    this.balance += value
    // valide e some ao saldo
    console.log(`Deposit of R$${value} made. Balance: R$${this.balance}`)
  }

  set withdraw(value) {
    if(value > this.balance){
        throw new Error("The withdrawal could not be processed. The withdrawal amount must be positive!")
        
    }

    this.balance -= value
    // valide e subtraia do saldo
    console.log(`Withdraw of R$${value} made. Balance: R$${this.balance}`)
  }

  get status() {
    // retorne 'positive' ou 'zeroed'
    return this.balance > 0 ? "positive" : "zeroed"
  }
}

console.log("Exercise 4 results:")
const acc = new BankAccount(100)
acc.deposit = 50     // saldo: 150
//acc.withdraw = 200   // erro: saldo insuficiente
console.log(acc.status)

// 5 
class Vehicle {
  constructor(brand, speed) {
    this.brand = brand
    this.speed = speed
  }

  accelerate(amount) {
    this.speed += amount
    console.log(`Speed: ${this.speed} km/h`)
  }
}

class ElectricCar extends Vehicle {
  constructor(brand, speed, battery) {
    super(brand, speed)
    this.battery = battery
  }

  accelerate(amount) {
    super.accelerate(amount)
    // reduza battery proporcionalmente
    this.battery -= amount * 0.5
    console.log(`Bateria: ${this.battery}%`)
  }
}

const tesla = new ElectricCar("Tesla", 0, 100)
tesla.accelerate(30)
console.log(tesla.speed)    // 30
console.log(tesla.battery)  // < 100
