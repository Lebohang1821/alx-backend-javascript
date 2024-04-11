export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  get sqft() { // Gets method for retrieving square footage of building
    return this._sqft;
  }

  set sqft(value) { // Sets method for setting square footage of building
    this._sqft = value;
  }
}
