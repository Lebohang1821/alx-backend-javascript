export class HolbertonClass {
  // Constructor method for creating instances of HolbertonClass
  constructor(year, location) {
    // Initializing year and location properties
    this._year = year; // Year of class
    this._location = location; // Location of class
  }

  // Getter method for retrieving year of class
  get year() {
    return this._year;
  }

  // Getter method for retrieving location of the class
  get location() {
    return this._location;
  }
}

// Defining class named StudentHolberton to represent student at Holberton
export class StudentHolberton {
  // Constructor method for creating instances of StudentHolberton
  constructor(firstName, lastName, holbertonClass) {
    // Initializing the firstName, lastName, and holbertonClass properties
    this._firstName = firstName; // First name of the student
    this._lastName = lastName; // Last name of the student
    this._holbertonClass = holbertonClass; // HolbertonClass instance representing the student's class
  }

  // Getter method for retrieving the full name of the student
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Getter method for retrieving the HolbertonClass instance associated with the student
  get holbertonClass() {
    return this._holbertonClass;
  }

  // Getter method for retrieving the full description of the student, including name, class year, and location
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Creating instances of HolbertonClass and StudentHolberton
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Creating a list of students
const listOfStudents = [student1, student2, student3, student4, student5];

// Exporting the list of students as the default export of the module
export default listOfStudents;
