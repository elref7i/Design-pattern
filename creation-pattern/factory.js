// factory pattern is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

class Car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

class CarFactory {
  createCar(name, color) {
    return new Car(name, color);
  }
}
