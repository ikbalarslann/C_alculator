



let _displayValue = '';
let _firstNumber = '';
let _nextNumber = '';
let _operator = '';


const btnArr=['0','1','2','3','4','5','6','7','8','9','+','-','*','/','=','clear'];


/*Math Calculation Methods*/
const add = (a,b)=>
a+b;

const subtract = (a,b)=> 
a-b;

const multiply = (a,b) =>
a*b;

const divide=(a,b)=>
a/b; 

/*Calculation Function*/
const operate=(a,operator,b)=>{
switch(true)
{
    case operator==="+":
       return add(a,b);
    case operator==="-":
       return subtract(a,b);    
    case operator==="*":
       return multiply(a,b);
    case operator==="/":
       return divide(a,b);    
   default:
      return "operator is not valid";           
}
}

/*Dom create buttons*/
const buttons =document.querySelector(".buttons");
const display=document.querySelector('.display');

for (const btn of btnArr) {
    const button = document.createElement('button');
    buttons?.appendChild(button);
    button.textContent = btn;
    button.addEventListener('click', () => {
        if (btn === '+' || btn === '-' || btn === '*' || btn === '/') {
            display.textContent +=' '+ btn+' ';
            _operator = btn; 
            _firstNumber = _displayValue; 
            _displayValue='';
            _nextNumber = '';
        } else if (btn === '=') {
            _nextNumber = _displayValue; 
            display.textContent = operate(Number(_firstNumber), _operator, Number(_nextNumber));
            _displayValue = display.textContent; 
            _firstNumber = '';
            _nextNumber = '';
            _operator = '';
        } else if (btn === 'clear') {
            _displayValue = '';
            _firstNumber = '';
            _nextNumber = '';
            _operator = '';
            display.textContent = '';
        } else {
            display.textContent += btn;
            _displayValue += btn;
        }
    });
}



