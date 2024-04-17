// Define a namespace called Subjects
namespace Subjects {
  // Define an interface for teachers specific to React
  export interface Teacher {
    experienceTeachingReact?: number; // Optional property representing experience teaching React
  }

  // Define a class for the React subject, extending a generic Subject class
  export class React extends Subjects.Subject {
    // Method to get requirements for React
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    // Method to get available teacher for React
    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingReact <= 0) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
