"use strict";
//as typecasting input element without this we cant use value property to extract values from input field
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const buttonEle = document.querySelector('button');
//:number[] -for number arr
const numArr = [];
const strArr = [];
const anyArr = [];
//generics type is a type that interacts with another type 
/*
 for e.g array- array itself is a datatype i.e list of numbers
 but it interacts with another type i.e the type of data that is stored inside of the array
*/
const numGenrics = [];
function add1(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    else {
        //forcing conversion to a number if mixed type is present using +
        return +num1 + +num2;
    }
}
//object type - {} inside bracket we are structuring our object type
function objectResult(obj) {
    console.log(obj.val);
    console.log(obj.time);
}
buttonEle.addEventListener('click', () => {
    const n1 = num1.value;
    const n2 = num2.value;
    //we are converting to num 
    const result = add1(+n1, +n2);
    console.log("num result " + result);
    const stringResult = add1(n1, n2);
    console.log("stringResult " + stringResult);
    //adding into array
    numArr.push(result);
    strArr.push(stringResult);
    //for object
    objectResult({ val: result, time: new Date() });
    console.log(numArr);
    console.log(strArr);
});
//console.log(add('1','5'));  //here we will get compile type error
//Promise is also type of generics - because it reolve the value and this type can be of different type
//here resolve is string type
const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }, 1000);
});
mypromise.then((result) => {
    console.log(result.split(' '));
});
