//
class Car {
  constructor(color, engine) {
    this.color = color;
    this.engine = engine;
  }
}

// Abstract Class
class carFactory {
  createCar(type) {
    switch (type) {
      case "S":
        return new Car("Red", "V7");
      case "H":
        return new Car("Black", "V8");
    }
  }
}

class SUV {
  constructor(color, engine) {
    this.color = color;
    this.engine = engine;
  }
}

class SUVFactory {
  createSUV(type) {
    switch (type) {
      case "A":
        return new SUV("Red", "V7");
      case "H":
        return new SUV("Black", "V8");
    }
  }
}

const carFactory = new carFactory();
const suvFactory = new SUVFactory();

const auto = (type, modal) => {
  switch (type) {
    case "car":
      return carFactory.createCar(modal);
    case "suv":
      return suvFactory.createSUV(modal);
    default:
      return null;
  }
};

console.log(auto("car", "S"));
console.log(auto("suv", "A"));

class Product {
  constructor(name, price, modal) {
    this.name = name;
    this.price = price;
    this.modal = modal;
  }
}

class Role {
  role(role) {
    switch (role) {
      case "user":
        console.log("User");
      case "seller":
        return new Product("Tshirt", 500, "addadis");
      default:
        return null;
    }
  }
}

class Auth {
  auth(status) {
    if (status) {
      Role.role("User");
    } else {
      console.log("u shouls loggin");
    }
  }
}

let x = new Auth();

x.auth(true);
