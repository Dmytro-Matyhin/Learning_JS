//FIRST TASK

{
  let firstNum = +prompt('Write first num?', 0);
  let secondNum = +prompt('Write second num', 0);
  let digit = prompt('Write digit?');


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
      alert('error')
    }
    break;
  }
}


// SECOND TASK


{
  let num = prompt('Write a number?', 0);
  let result = 0;

  for (let i = 0; i <= num; i++) {
    if (num <= 10) {
      alert('error');
      break;
    }
    result += i;
  }
  alert(result)
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
    } else if (count === 2) {
      alert('Good luck for the next time')
    } else alert('Try again')
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

