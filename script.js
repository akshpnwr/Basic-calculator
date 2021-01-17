class Calculator {
  constructor(previousOperandEl, currentOperandEl) {
    this.previousOperandEl = previousOperandEl;
    this.currentOperandEl = currentOperandEl;
    this.clear();
  }
  clear() {
    this.previousOperand = '';
    this.currentOperand = '';
    this.operator = undefined;
  }
  append(value) {
    if (!this.currentOperand) this.currentOperand = value;
    else this.currentOperand += value;
  }
  updateDisplay() {
    if (!this.previousOperand) this.previousOperandEl.innerText = '';
    else this.previousOperandEl.innerText = this.previousOperand + this.operand;
    this.currentOperandEl.innerText = this.currentOperand;
  }
  chooseOperation(operand) {
    this.operand = operand;
    this.currentOperandEl.innerText += this.operand;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
    this.updateDisplay();
  }

  performOperation() {
    if (!this.operand) return;

    const num1 = Number(this.previousOperand);
    const num2 = Number(this.currentOperand);
    this.previousOperandEl.innerText = '';
    if (this.operand === '+') {
      this.currentOperandEl.innerText = num1 + num2;
    }
    if (this.operand === '-') {
      this.currentOperandEl.innerText = num1 - num2;
    }
    if (this.operand === '*') {
      this.currentOperandEl.innerText = num1 * num2;
    }
    if (this.operand === '÷') {
      this.currentOperandEl.innerText = num1 / num2;
    }
  }
}

const previousOperandEl = document.querySelector('.previous-operand');
const currentOperandEl = document.querySelector('.current-operand');
const allNumbers = document.querySelectorAll('[data-number]');
const allOperators = document.querySelectorAll('[data-operator]');
const equalBtn = document.querySelector('[data-equal]');
const deleteBtn = document.querySelector('[data-delete]');
const allClearBtn = document.querySelector('[data-all-clear]');

const calculator = new Calculator(previousOperandEl, currentOperandEl);

allNumbers.forEach((num) => {
  num.addEventListener('click', function (e) {
    const value = e.target.innerText;
    calculator.append(value);
    calculator.updateDisplay(value);
  });
});

allOperators.forEach((operand) => {
  operand.addEventListener('click', function (e) {
    const value = e.target.innerText;
    calculator.chooseOperation(value);
  });
});

equalBtn.addEventListener('click', function () {
  calculator.performOperation();
});

allClearBtn.addEventListener('click', function () {
  calculator.clear();
  calculator.updateDisplay();
});
