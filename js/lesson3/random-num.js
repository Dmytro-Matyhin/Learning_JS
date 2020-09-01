let randomNum = Math.floor(Math.random() * 100);

// console.log оставил для проверки
console.log(randomNum);

let guessTheNumber;
checkAttempt(guessTheNumber);


function getNum(number) {
  let num = prompt(number);
  return num;
}

function checkAttempt(guessTheNumber) {
  let status = false;
  let count = 0;
  let attempt = 5;

  while (count < 5) {
    
    guessTheNumber = getNum('Введите число от 0 до 100');
    
    if (guessTheNumber == randomNum) {
      alert('Вы угадали!');
      status = true;
      break;
    } else if (isNaN(guessTheNumber)) {
      alert('Введите число');
    } else if (guessTheNumber == null) {
      alert(`Вы отменили! Загаданное число было ${randomNum}`);
      break;
    } else if (guessTheNumber > 100 || guessTheNumber < 0) {
      alert('Введенное число должно быть от 0 до 100');
    }
    
    if (guessTheNumber !== randomNum) {
      attempt--;
      closeToTarget(guessTheNumber);
      alert(`Попыток осталось: ${attempt}`);
    }
    
    count++;

    if (count == 5) {
      alert(`Загаданное число было ${randomNum}`);
    }
  }
  return status;
}

function closeToTarget(guessTheNumber) {

  if (randomNum > guessTheNumber) {
    alert('Загаданное число больше введенного');
  } else if (randomNum < guessTheNumber) {
    alert('Загаданное число меньше введенного');
  }
  return true;
}