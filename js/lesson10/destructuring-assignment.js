let info = {
  neme: "Michael",
  surname: "Scofield",
  specializatin: "Architect"
}

let {neme: name, surname, specializatin: specialization} = info;
info = Object.assign({}, {name, surname, specialization});
// console.log(info);

//-----------------------------//

const student = {
  name: 'John Doe',
  age: 16,
  scores: {
    maths: 74,
    english: 63,
    science: 85
  }
};

function showInfo( {name, age, scores:{maths = 0, english = 0, science = 0}} ) {
  console.log('Hello, ' + name);
  console.log(name + ' age is: ' + age);
  console.log('Your Maths score is ' + maths);
  console.log('Your English score is ' + english);
  console.log('Your Science score is ' + science);
}

showInfo(student);

//-----------------------------//

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let [red, orange, ...rest] = rainbow;
let newRainbow = rest.concat(red, orange);

// console.log(newRainbow);
