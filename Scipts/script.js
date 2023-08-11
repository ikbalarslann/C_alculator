var _displayValue = '';
var _firstNumber = '';
var _nextNumber = '';
var _operator = '';
var btnArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '=', 'clear'];
/*Math Calculation Methods*/
var add = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    return a - b;
};
var multiply = function (a, b) {
    return a * b;
};
var divide = function (a, b) {
    return a / b;
};
/*Calculation Function*/
var operate = function (a, operator, b) {
    switch (true) {
        case operator === "+":
            return add(a, b);
        case operator === "-":
            return subtract(a, b);
        case operator === "*":
            return multiply(a, b);
        case operator === "/":
            return divide(a, b);
        default:
            return "operator is not valid";
    }
};
/*Dom create buttons*/
var buttons = document.querySelector(".buttons");
var display = document.querySelector('.display');
var _loop_1 = function (btn) {
    var button = document.createElement('button');
    buttons === null || buttons === void 0 ? void 0 : buttons.appendChild(button);
    button.textContent = btn;
    button.addEventListener('click', function () {
        if (btn === '+' || btn === '-' || btn === '*' || btn === '/') {
            display.textContent += ' ' + btn + ' ';
            _operator = btn;
            _firstNumber = _displayValue;
            _displayValue = '';
            _nextNumber = '';
        }
        else if (btn === '=') {
            _nextNumber = _displayValue;
            display.textContent = operate(Number(_firstNumber), _operator, Number(_nextNumber));
            _displayValue = display.textContent;
            _firstNumber = '';
            _nextNumber = '';
            _operator = '';
        }
        else if (btn === 'clear') {
            _displayValue = '';
            _firstNumber = '';
            _nextNumber = '';
            _operator = '';
            display.textContent = '';
        }
        else {
            display.textContent += btn;
            _displayValue += btn;
        }
    });
};
for (var _i = 0, btnArr_1 = btnArr; _i < btnArr_1.length; _i++) {
    var btn = btnArr_1[_i];
    _loop_1(btn);
}
