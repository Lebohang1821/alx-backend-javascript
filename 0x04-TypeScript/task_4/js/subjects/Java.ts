// Define a namespace called Subjects
namespace Subjects {
  // Define an interface for teachers specific to Java
  export interface Teacher {
    experienceTeachingJava?: number; // Optional property representing experience teaching Java
  }

  // Define a class for the Java subject, extending a generic Subject class
  export class Java extends Subjects.Subject {
    // Method to get requirements for Java
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    // Method to get available teacher for Java
    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingJava <= 0) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
