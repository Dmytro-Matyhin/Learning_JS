let array = [4, 9, 16, 25, 36, 49, 64, 81];

function myMap(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

let mapedArray = myMap(array, function (item) {
  return item * 2;
})

console.log(mapedArray);
console.log(array);
