let dirtyArray = [
  vehicle = {
    wheels: 4,
    engine: true,
  },
  bicycle = {},
  bigTruck = {
    wheels: 6,
    engine: false,
  },
  van = {
    wheels: 4,
    engine: true,
    color: 'white',
  },
  boat = {},
  plane = {}
];

let cleanArray = cleaner(dirtyArray);

console.log(cleanArray);
console.log(dirtyArray);



function cleaner(arr) {
  let newArr = [];

  for (let key of arr) {
    if (Object.keys(key).length > 0) {
      newArr.push(key);
    }
  }
  return newArr;
}
