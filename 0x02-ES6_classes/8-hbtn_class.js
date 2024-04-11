export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size; // If conversion hint is 'string', return location
    }
    if (hint === 'string') {
      return this.location; // If conversion hint is 'string', return location
    }
    return this; // If conversion hint is neither 'number' nor 'string'
}
