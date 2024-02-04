function divideBy(firstNumber) {
  return function (secondNumber) {
    return secondNumber / firstNumber;
  };
}

function addby(firstNumber) {
  return function (secondNumber) {
    return secondNumber + firstNumber;
  };
}

const addBy100 = addby(100);
const addBy1000 = addby(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);
