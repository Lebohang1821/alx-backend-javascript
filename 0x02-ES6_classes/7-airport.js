export default class Airport {
  // Constructor method for creating instances of Airport
  constructor(name, code) {
    this.name = name; // Name of the airport
    this.code = code; // Code of the airport
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // Gets method for defining string tag representation of Airport object
  // This allows customized behavior when object is converted to string
  get [Symbol.toStringTag]() {
    // Returns airport code as string tag
    return this._code;
  }
}
