import Car from './10-car'; // Importing Car class

// Class for Electric Vehicle (EV) Car, extending Car
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Calling superclass constructor
    this.range = range; // Setting the range of the EV Car
  }

  get range() {
    return this._range; // Gets range of EV Car
  }

  set range(value) {
    this._range = value; // Sets range of the EV Car
  }

  cloneCar() {
    const Species = super.constructor[Symbol.species];

    return new Species(); // Creates instance using species constructor
  }
}
