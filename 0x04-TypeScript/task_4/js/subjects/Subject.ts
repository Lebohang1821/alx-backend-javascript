// It define namespace called Subjects
namespace Subjects {
  // Define class called Subject
  export class Subject {
    teacher: Subjects.Teacher; // Property to store teacher instance

    // Setter method to set the teacher for subject
    set setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }
  }
}
