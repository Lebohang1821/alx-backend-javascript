import Building from './5-building';

// Defining class named SkyHighBuilding that extends Building class
export default class SkyHighBuilding extends Building {
  // Constructor method for creating instances of SkyHighBuilding
  constructor(sqft, floors) {
    // Calling superclass (Building) constructor with square footage
    super(sqft);
    // Assigning the number of floors of the sky-high building
    this.floors = floors;
  }

  // Gets method for retrieving the number of floors
  get floors() {
    return this._floors;
  }

  // Sets method for setting number of floors
  set floors(value) {
    this._floors = value;
  }

  // Method to provide evacuation warning message for sky-high building
  evacuationWarningMessage() {
    // Constructing and returning evacuation warning message
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
