// Define a namespace called Subjects
namespace Subjects {
  // Define an interface for teachers
  export interface Teacher {
    experienceTeachingC?: number; // Optional property representing experience teaching C
  }

  // Define a class for the C++ subject, extending a generic Subject class
  export class Cpp extends Subjects.Subject {
    // Method to get requirements for C++
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    // Method to get available teacher for C++
    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingC <= 0) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
