var displayValue = '';
var operator = '';
var result = '';

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(op) {
  operator = op;
  displayValue += ' ' + operator + ' ';
  updateDisplay();
}

function calculate() {
  var expression = displayValue.split(' ');
  var num1 = parseFloat(expression[0]);
  var num2 = parseFloat(expression[2]);

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      break;
  }

  displayValue = result.toString();
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  operator = '';
  result = '';
  updateDisplay();
}

function updateDisplay() {
  var display = document.getElementById('display');
  display.textContent = displayValue;
}
