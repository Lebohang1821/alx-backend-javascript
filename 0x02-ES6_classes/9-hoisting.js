export class HolbertonClass {
  constructor(year, location) {
    this._year = year; // Year
    this._location = location; // Location
  }

  get year() {
    return this._year; // Get year
  }

  get location() {
    return this._location; // Get location
  }
}

// Represents a student at Holberton
export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName; // First name
    this._lastName = lastName; // Last name
    this._holbertonClass = holbertonClass; // HolbertonClass instance
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`; // Full name
  }

  get holbertonClass() {
    return this._holbertonClass; // HolbertonClass instance
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Instances of HolbertonClass and StudentHolberton
const class2019 = new HolbertonClass(2019, 'San Francisco'); // HolbertonClass instance for 2019
const class2020 = new HolbertonClass(2020, 'San Francisco'); // HolbertonClass instance for 2020

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020); // Student 1
const student2 = new StudentHolberton('John', 'Doe', class2020); // Student 2
const student3 = new StudentHolberton('Albert', 'Clinton', class2019); // Student 3
const student4 = new StudentHolberton('Donald', 'Bush', class2019); // Student 4
const student5 = new StudentHolberton('Jason', 'Sandler', class2019); // Student 5

// List of students
const listOfStudents = [student1, student2, student3, student4, student5];

// Exporting the list of students as the default export
export default listOfStudents;
