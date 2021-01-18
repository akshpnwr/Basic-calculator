class Calculator {
  constructor(previousOperandEl, currentOperandEl) {
    this.previousOperandEl = previousOperandEl;
    this.currentOperandEl = currentOperandEl;
    this.clear();
  }
  clear() {
    this._previousOperand = '';
    this._currentOperand = '';
    this._operator = undefined;
  }

  append(value) {
    if (!this._currentOperand) this._currentOperand = value;
    else this._currentOperand += value;
  }

  delete() {
    this._currentOperand = '';
  }
  updateDisplay() {
    if (!this._previousOperand) this.previousOperandEl.innerText = '';
    else
      this.previousOperandEl.innerText = this._previousOperand + this._operand;
    this.currentOperandEl.innerText = this._currentOperand;
  }
  chooseOperation(operand) {
    this.performOperation();
    this._operand = operand;
    this.currentOperandEl.innerText += this._operand;
    this._previousOperand = this._currentOperand;
    this._currentOperand = '';
  }

  performOperation() {
    if (!this._operand) return;

    if (!this._currentOperand || !this._previousOperand) return;

    const num1 = Number(this._previousOperand);
    const num2 = Number(this._currentOperand);

    let result;
    if (this._operand === '+') {
      result = num1 + num2;
    }
    if (this._operand === '-') {
      result = num1 - num2;
    }
    if (this._operand === '*') {
      result = num1 * num2;
    }
    if (this._operand === '÷') {
      result = num1 / num2;
    }
    this._currentOperand = result;
    this._previousOperand = '';
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
    calculator.updateDisplay();
  });
});

allOperators.forEach((operand) => {
  operand.addEventListener('click', function (e) {
    const value = e.target.innerText;

    calculator.chooseOperation(value);
    calculator.updateDisplay();
  });
});

equalBtn.addEventListener('click', function () {
  calculator.performOperation();
  calculator.updateDisplay();
});

allClearBtn.addEventListener('click', function () {
  calculator.clear();
  calculator.updateDisplay();
});

deleteBtn.addEventListener('click', function () {
  calculator.delete();
  calculator.updateDisplay();
});
