// ### **Exercise 3: Expand the Blueprint**

// **Prompt:**

// Create a constructor function named `Student` that represents a student. Each student should have:

// 1. `name` (e.g., "Alice")
// 2. `grade` (e.g., 10)
// 3. `subject` (e.g., "Mathematics")
// 4. A method `introduce()` that logs the message:`"Hi, I am [name], studying [subject] in grade [grade]."`
// 5. A method `finishesSchoolYear()` that:
// - Adds 1 to the grade (e.g., from 10 to 11).
// - If the grade reaches 12, it prints: `"Congratulations, [name] has graduated!"` and does not increase the grade.

// Create three students and have them introduce themselves and call `finishesSchoolYear()`.

//---

  // Constructor function for the `Student`

function Student(name, grade, subject) {
  this.name = name;
  this.grade = grade;
  this.subject = subject;


  // Method to introduce the student
this.introduce = function() {
    console.log(`Hi, I am ${this.name}, studying ${this.subject} in grade ${this.grade}.`);
  };

  // Method to finish the school year
  this.finishesSchoolYear = function() {
    if (this.grade < 12) {
      this.grade += 1;
      console.log(`Congratulations, ${this.name} has finished school year ${this.grade - 1}.`);
    } else {
      console.log(`Congratulations, ${this.name} has Graduated!`);
    }
  };
}

// Create three students and introduce them

const student1 = 
new Student("Angelica", 10, "Mathematics");
student1.introduce();
student1.finishesSchoolYear();

const student2 =
new Student("Andrea", 12, "Science");
student2.introduce();
student1.finishesSchoolYear();

const student3 =
new Student("Alexis", 9, "English");
student3.introduce();student3.finishesSchoolYear();