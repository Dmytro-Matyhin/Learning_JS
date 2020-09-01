function reverseNumber(num) {
  let stringNum = num.toString(); 
  let stringReverse = '';

  for (let i = stringNum.length - 1; i >= 0; i--) {
    stringReverse += stringNum[i];
  }
  return +stringReverse;
}

console.log(reverseNumber(1234))
console.log(reverseNumber(123456789))