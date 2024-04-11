export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  static get [Symbol.species]() {
    return this;  // Returns constructor function
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species(); // Creating new instance using species constructor
  }
}
