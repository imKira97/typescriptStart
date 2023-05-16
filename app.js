"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const buttonEle = document.querySelector('button');
//number - for integer ,float ,double
//string - for text 
//any- for any kind of datatype
// | - union combine e.g (number|string - this will accept both)
function add1(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + '' + num2;
    }
    else {
        //forcing conversion to a number if mixed type is present using +
        return +num1 + +num2;
    }
}
buttonEle.addEventListener('click', () => {
    const n1 = num1.value;
    const n2 = num2.value;
    const result = add1(+n1, +n2);
    console.log(result);
});
//console.log(add('1','5'));  //here we will get compile type error
