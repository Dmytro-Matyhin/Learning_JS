let array = [10, 'Hello world', null, true , '', false, 255];


console.log(explainer(array));



function explainer(arr) {
  let newArr = getRidNegativeValues(arr);

  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = replaceNumberToObject(newArr, i);
    newArr[i] = replaceBooleanToObject(newArr, i);
    newArr[i] = replaceStringToObject(newArr, i);
  }
  return newArr;
}


function getRidNegativeValues(arr) {
  let newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      continue;
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


function replaceNumberToObject(arr, index) {
  
  if (typeof(arr[index]) === 'number') {
    arr[index] = new Number(arr[index]);
  }

  return arr[index];
}


function replaceBooleanToObject(arr, index) {

  if (typeof(arr[index]) === 'boolean') {
    arr[index] = new Boolean(arr[index]);
  }

  return arr[index];
}


function replaceStringToObject(arr, index) {
  
  if (typeof(arr[index]) === 'string') {
    arr[index] = new String(arr[index]);
  }

  return arr[index];
}
