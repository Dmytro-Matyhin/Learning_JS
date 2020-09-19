function Student(name, marks) {
  this.name = name,
  this.marks = marks;
}

Student.prototype.averageMark = function() {
  return this.marks.reduce((acc, curr) => (acc + curr)) / this.marks.length;
}

Student.prototype.minMark = function() {
  return Math.min.apply(null, this.marks);
}

Student.prototype.maxMark = function() {
  return Math.max.apply(null, this.marks);
}


randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let students = [];

for (let i = 0; i < 5; i++) {
  let marks = [];

  for (let j = 0; j < 10; j++) {
    marks.push(randomIntFromInterval(1, 10));
  }
  students.push(new Student(`Student ${i + 1}`, marks));
}

// console.log(students)

findMaxMark = arr => arr.reduce((acc, curr) => acc.maxMark.call(acc) > curr.maxMark.call(curr) ? acc : curr)

console.log(findMaxMark(students))


// Можно еще сравнить по средней оценке студента

//findMaxMark = arr => arr.reduce((acc, curr) => acc.averageMark.call(acc) > curr.averageMark.call(curr) ? acc : curr)