const numberContainer = document.querySelector('.numbers');
const operationContainer = document.querySelector('.operations');
const result = document.querySelector('.result');
const equal = document.querySelector('.equal');

let query = '';

const createQuery = function (e) {
  const clicked = e.target;

  if (!clicked.classList.contains('num')) return;

  query += clicked.value;
  result.value = query;
};

const validateNumber = (n) => {
  const num = parseFloat(n);
  return !Number.isNaN(num) && Number.isFinite(num) && Number(n) == n;
};

const calc = function (operand, num1, num2) {
  console.log(operand, num1, num2);
};

equal.addEventListener('click', function () {
  query.split('').forEach((el, i, arr) => {
    if (validateNumber(el)) return;
    console.log(el);

    calc(el, Number(arr[i - 1]), Number(arr[1 + 1]));
  });
});

// const num = parseFloat(n);
// return !Number.isNaN(num) && Number.isFinite(num) && Number(n) == n;

numberContainer.addEventListener('click', createQuery);
operationContainer.addEventListener('click', createQuery);
