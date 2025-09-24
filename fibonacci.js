const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Nhập số lượng số fibonacci muốn in: ', n => {
  let firstNumber = 0, secondNumber = 1;
  let fibonacciArray = [];
  let nextNumber = 0;

  for (let i = 0; i < n; i++) {
    fibonacciArray.push(firstNumber);
    nextNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = nextNumber;
  }

  console.log(fibonacciArray);
  readline.close();
});
