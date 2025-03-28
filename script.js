// Variables de estado
let currentInput = '0';
let operator = null;
let operand1 = null;
let resetNext = false;

// Referencia al display
const display = document.getElementById('display');

// Función para actualizar la pantalla
function updateDisplay() {
  display.textContent = currentInput;
}

// Ingreso de números
function inputNumber(num) {
  if (resetNext) {
    currentInput = num;
    resetNext = false;
  } else {
    currentInput = currentInput === '0' ? num : currentInput + num;
  }
  updateDisplay();
}

// Ingreso de punto decimal
function inputDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

// Reinicio total (botón C)
function clearDisplay() {
  currentInput = '0';
  operator = null;
  operand1 = null;
  resetNext = false;
  updateDisplay();
}

// Cambio de signo
function toggleSign() {
  if (currentInput !== '0') {
    currentInput = currentInput.startsWith('-')
      ? currentInput.slice(1)
      : '-' + currentInput;
    updateDisplay();
  }
}

// Operadores
function inputOperator(op) {
  if (!resetNext) {
    operand1 = parseFloat(currentInput);
    operator = op;
    resetNext = true;
  }
}

// Evaluación del resultado (=)
function calculateResult() {
  if (operator && operand1 !== null) {
    const operand2 = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        result = operand2 !== 0 ? operand1 / operand2 : 'Error';
        break;
      case '%':
        result = operand1 % operand2;
        break;
    }

    currentInput = result.toString();
    operator = null;
    operand1 = null;
    resetNext = true;
    updateDisplay();
  }
}
