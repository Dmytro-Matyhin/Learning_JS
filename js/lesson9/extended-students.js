function Human(config) {
  this.name = config.name,
  this.surname = config.surname,
  this.age = config.age;
}

function Student(config) {
  Human.call(this, config);
  this.marks = config.marks;
}

function Teacher(config) {
  Human.call(this, config);
  this.group = config.group;
}

Human.prototype = Object.assign(Human.prototype, {
  getFullName() {
    return `${this.name} ${this.surname}`;
  },

  setFullName(fullName) {
    fullName = fullName.split(' ');
    this.name = fullName[0], this.surname = fullName[1];
  }
})

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

Student.prototype = Object.assign(Student.prototype, {
  averageMark() {
    return this.marks.reduce((acc, curr) => (acc + curr)) / this.marks.length;
  },
  
  minMark() {
    return this.marks.sort((a, b) => b - a)[this.marks.length - 1];
  },

  maxMark() {
    return this.marks.sort((a, b) => a - b)[this.marks.length - 1];
  },

  getFullName() {
    return `${this.name} ${this.surname} - student`;
  }
})

Teacher.prototype = Object.create(Human.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype = Object.assign(Teacher.prototype, {
  getListOfNamesByAverageMark() {
    return this.group.sort((a, b) => b.averageMark() - a.averageMark()).map(item => item.name);
  },

  getStudentByName(name) {
    return this.group.find(item => item.name === name);
  },

  removeStudentByName(name) {
    let tempName = this.getStudentByName(name);
    return this.group.splice(this.group.indexOf(tempName), 1);
  },

  updateStudentByName(student, name) {
  this.group.splice(this.group.indexOf(this.getStudentByName(name)), 1,  new Student(student));
  }
})


let group = [
  new Student({
    name: 'Dima',
    surname: 'Matyhin',
    age: 25,
    marks: [10, 10, 9, 8, 10],
  }),
  new Student({
    name: 'Artem',
    surname: 'Matyhin',
    age: 22,
    marks: [9, 7, 8, 10, 5],
  }),
  new Student({
    name: 'Anton',
    surname: 'Prutya',
    age: 24,
    marks: [10, 6, 8, 9, 10],
  }),
  new Student({
    name: 'Vlad',
    surname: 'Dementor',
    age: 30,
    marks: [7, 4, 2, 8, 10],
  }),
  new Student ({
    name: 'Max',
    surname: 'Budnyk',
    age: 26,
    marks: [9, 9, 10, 4, 4],
  })
]

let teacher = new Teacher({
  name: 'Stan',
  surname: 'Cooper',
  age: 45,
  group,
});

// console.log(teacher.getListOfNamesByAverageMark())
// console.log(teacher.getStudentByName('Dima'))
// console.log(teacher.removeStudentByName('Anton'));
// console.log(teacher);
// console.log(teacher.updateStudentByName({
//   name: 'Misha', 
//   surname: 'Circle', 
//   age: 40, 
//   marks:[9, 8, 4, 10, 3]}, 
//   'Anton'));

// console.log(teacher);

//------------------------------------------------//

let human = new Human({
  name: 'John',
  surname: 'Smith',
  age: 50
})

let student = new Student({
  name: 'Mike',
  surname: 'Vasovskiy',
  age: 35,
  marks: [2, 4, 6, 9, 5]
}) 
let secTeacher = new Teacher({
  name: 'Jane',
  surname: 'Thompson',
  age: 42
})

// console.log(human);
// console.log(student.setFullName('Sheldon Cooper'));
// console.log(student)
// console.log(secTeacher);
// console.log(student.averageMark())
// console.log(student.minMark())
// console.log(student.maxMark())
