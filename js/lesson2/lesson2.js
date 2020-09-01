//FIRST TASK

{
  let firstNum = +prompt('Write first num', 0);
  let secondNum = +prompt('Write second num', 0);
  let digit = prompt('Write digit');

  if (isNaN(firstNum) || isNaN(secondNum)) {
    alert('error');
  }

  switch (digit) {
    case '+': {
      alert(firstNum + secondNum);
    }
    break;

    case '-': {
      alert(firstNum - secondNum);
    };
    break;

    case '*': {
      alert(firstNum * secondNum);
    };
    break;

    case '/': {
      alert(firstNum / secondNum);
    };
    break;

    case '':
    case null: {
      alert('error');
    }
    break;
    default: {
      alert('error');
    }
  }
}


// SECOND TASK


{
  let num = prompt('Write a number?', 0);
  let result = 0;

  if (num == null) {
    alert('error');
  } else if (num <= 10) {
    alert('num < 10');
  } else {
    for (let i = 0; i <= num; i++) {
      result += i;
    }
    alert(result);
  }
}

// THIRD TASK

{
  function check(n) {
    if (typeof(n) === 'number') {
      return 1;
    } else if (typeof(n) === 'string') {
      return 0;
    } else {
      return -1;
    } 
  }
  
  console.log(check(1));
  console.log(check('Hello'));
  console.log(check(null));
}


// ADDITIONAL TASKS


{

  const COLOR = 'green'
  let count = 0;

  while(count < 3) {
    let divine = prompt('What is the color?')
    if (divine === COLOR) {
      alert('You win!')
      break;
    } else if (count == 3) {
      alert('Try again later');
      break;
    }
    count++;
  }

}



{
  function substringExists(str, substr) {
    if (str.indexOf(substr) != -1) {
      return true;
    } else {
      return false;
    } 
  }
  
  console.log(substringExists('Я люблю круассаны' ,'люблю'));
  console.log(substringExists('Он кушает мороженное' ,'хлеб'));
}

