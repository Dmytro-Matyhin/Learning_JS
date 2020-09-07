let vasia = { name: "Вася", age: 25 };
let petia = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let egor = { name: "Егор", age: 40 };
let dima = { name: "Дима", age: 35 };
let lena = { name: "Лена", age: 18 };
let users = [ vasia, petia, masha, egor, dima, lena ];


getYoungEmployees = (arr) => {
  let filteredAge = arr.filter(value => value.age < 30);
  let result = filteredAge.map(item => item.name);
  return result;
}
console.log(getYoungEmployees(users))



getAverageAge = (arr) => {
  let usersAge = arr.map(item => item.age);
  let result = usersAge.reduce((acc, curr) => {
    return (acc + curr);
  })

  return Math.floor(result / usersAge.length);
}
console.log(getAverageAge(users));


sortByKey = (key) => {

  if (key == 'name') {
    let sortByName = users.map(item => item.name);
    return sortByName.sort();
    
  } else if (key == 'age') {
    let sortByAge = users.map(item => item.age);
    return sortByAge.sort((a, b) => a - b);

  } else {
    return 'key has no defined in array';
  }
}

console.log(sortByKey('name'));
console.log(sortByKey('age'));
console.log(sortByKey('job'));
