// Defining a class named HolbertonCourse
export default class HolbertonCourse {
  // Constructor method for creating instances of HolbertonCourse
  constructor(name, length, students) {
    // Assigning values to properties of the class instance
    this.name = name; // Name of the course
    this.length = length; // Length of the course
    this.students = students; // List of students enrolled in the course
  }

  // Getter method for retrieving the name of the course
  get name() {
    return this._name;
  }

  // Setter method for setting the name of the course
  set name(value) {
    // Validation: Ensuring the name is a string
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    // Assigning the name to the private property _name
    this._name = value;
  }

  // Getter method for retrieving the length of the course
  get length() {
    return this._length;
  }

  // Setter method for setting the length of the course
  set length(value) {
    // Validation: Ensuring the length is a number
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    // Assigning the length to the private property _length
    this._length = value;
  }

  // Getter method for retrieving the list of students enrolled in the course
  get students() {
    return this._students;
  }

  // Setter method for setting the list of students enrolled in the course
  set students(value) {
    // Validation: Ensuring students is an array
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    // Validation: Ensuring all elements in the array are strings
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    // Assigning the list of students to the private property _students
    this._students = value;
  }
}
