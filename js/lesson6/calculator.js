createCalculator = (firstNum) => {
  return {
      add(secondNum) {
        return firstNum + secondNum;
      },

      sub(secondNum) {
        return firstNum - secondNum;
      },

      divide(secondNum) {
        return firstNum / secondNum;
      },

      mult(secondNum) {
        return firstNum * secondNum;
      },

      set(secondNum) {
        firstNum = secondNum;
        return firstNum;
      },
  }
}

let calc = createCalculator(200);

console.log(calc.add(50));
console.log(calc.sub(20));
console.log(calc.divide(5));
console.log(calc.mult(3));
console.log(calc.set(100));
console.log(calc.mult(5));
