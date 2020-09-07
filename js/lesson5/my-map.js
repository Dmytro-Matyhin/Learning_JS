let array = [4, 9, 16, 25, 36, 49, 64, 81];
let result = [];

myMap = (item) => Math.sqrt(item);

result = array.map(myMap);
console.log(result);