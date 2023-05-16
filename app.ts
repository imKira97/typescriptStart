//as typecasting input element without this we cant use value property to extract values from input field

const num1=document.getElementById('num1') as HTMLInputElement;
const num2=document.getElementById('num2') as HTMLInputElement;
const buttonEle=document.querySelector('button')!;

//:number[] -for number arr
const numArr:number[]=[];
const strArr:string[]=[];
const anyArr=[];

//number - for integer ,float ,double
//string - for text 
//any- for any kind of datatype
// | - union combine e.g (number|string - this will accept both)


//type keyword is use as alias when we do union of two type 
type stringOrNumber=number|string;
//above we have given number|string union type a name and we can directly use that name instead od writing num|str union
//same can be done for object as well
type ResultObj={val:number;time:Date}


//for object type we can also use interface
interface resultObjWithInter{
    val:number;
    time:Date;

}

//generics type is a type that interacts with another type 
/*
 for e.g array- array itself is a datatype i.e list of numbers
 but it interacts with another type i.e the type of data that is stored inside of the array
*/
const numGenrics:Array<number>=[];

function add1(num1:stringOrNumber, num2:stringOrNumber){
    if(typeof num1==='number' && typeof num2 ==='number'){
        return num1+num2;
    }
    else if(typeof num1==='string' && typeof num2 ==='string'){
        return num1+' '+num2;
    }
    else{
        //forcing conversion to a number if mixed type is present using +
        return +num1 +   +num2;
    }
    
}

//object type - {} inside bracket we are structuring our object type
function objectResult(obj:ResultObj){
    console.log(obj.val);
    console.log(obj.time);
    

}

buttonEle.addEventListener('click',()=>{

    const n1=num1.value
    const n2=num2.value
    //we are converting to num 
    const result=add1(+n1,+n2);
    console.log("num result "+ result);
    const stringResult=add1(n1,n2);
    console.log("stringResult "+stringResult);

    //adding into array
    numArr.push(result as number);
    strArr.push(stringResult as string);

    //for object
    objectResult({val:result as number,time:new Date()})

    console.log(numArr);
    console.log(strArr);
});


//console.log(add('1','5'));  //here we will get compile type error


//Promise is also type of generics - because it reolve the value and this type can be of different type
//here resolve is string type
const mypromise=new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve('it worked');
    },1000)
})
mypromise.then((result)=>{
    console.log(result.split(' '));
    
})
