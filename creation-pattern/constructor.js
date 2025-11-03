class Car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

class SUV extends Car {
  constructor(name, color, price) {
    super(name, color);
    this.price = price;
  }
}

let suv = new SUV("Toyota", "Red", 10000);
console.log(suv);
