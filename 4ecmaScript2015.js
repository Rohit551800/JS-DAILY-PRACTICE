console.log("EcmaScript ES6 2015 Features");

//Let and Const 

// var eg
// if(true){
//     var name = "Rohit";
//     console.log(name);
// }
// console.log(name);

// Output
/*Rohit
  Rohit */

// let eg
// if(true){
//     let name = "Rohit";
//     console.log(name);
// }
// console.log(name);

// Output
// Error name not declared after if statement

// const eg

// const name = "rohit";
// if(true){
//     name = "Singh";
//     console.log(name);
// }
// name = "Gouria";
// console.log(name);

// Output
//Error name connot be redeclared

//In Professional Coding we always prefer to use let and const



//Tempelate String ::Allow string interpolation syntax ::${} ::eg
// let age = 18;
// console.log(`I am ${age} year old`);

// //more egs
// let firstName = "Rohit" , lastName = "Gouria";
// console.log(`${firstName}             ${lastName}`);



// let multiLineString = `This is multi-line String
// String using template literals
// It's much cleaner and easier to read
// `;
// console.log(multiLineString);

//!practice time

//table of 5
// for(let i=1;i<=10;i++){
//     console.log(`5 * ${i} = ${5*i}`);
// }




//default parameters
//eg
//write a function to find sum of two numbers

// function sum(a,b=4){ // b ki value default ye rehaegi //pr koi agr argument mai dega toh argument vali value use hogi
//     return a+b;
// }
// console.log(`Sum of two numbers is :${sum(5 , 15)}`);


//Arrow function

// const sum = (a , b) => `Sum of ${a} and ${b} = ${a + b}`;
// console.log(sum(5,6));

//Note:
//agr ek expression mai funtion body khtm hoo rahi hai toh {} braces ko use krne ki need nahi hai like if-else mai
//eg
// const sum = (a , b) => `Sum of ${a} and ${b} = ${a + b}`;
// console.log(sum(5,6));


//agr ek hi parameter hai toh () use krne ki need nahi hai around the parameters
//eg
// const square = a => `Square of ${a} = ${a * a}`;

// console.log(square(5));


//agr ek b paranthesis nahi hai toh () use krte hai
//eg

// const greet = () => console.log("Hello world");

// greet();



//Function practice questions 
//Reverse a string :method1
const resultStr = (s) => {
    let arr = s.split('');
    let i = 0, j = arr.length - 1;
    while(i<=j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr.join('');
};
// console.log(resultStr('Rohit'));


//method 2
const result1 = s => {
    return s.split('').reverse().join('');
}
// console.log(result1("HELLO WORLD"));

//Function for creating calculator
let result ;
const resultCalc = (a , b , c) => {
    switch(c){
        case '+':
        return a+b;
        case '-':
        return a -b; 
        case '/':
        if(b === 0){
            return "Cannot be divisible by 0";
        }
        return a/b;
        case '*':
        return a*b;
        case '%':
        return a%b;
        default:
        console.log("Enter a wrong operator");
    }
}
// console.log(resultCalc(10 , 0 , '/'));

//check a string is a valid palindrome or not

function checkPalindrome(s){
    let i = 0 , j = s.length-1;
    while(i<j){
        if(s[i] === s[j]){
            i++;
            j--;
        }
        else return "Not a palindrome";
    }
    return `Yes string ${s} is a valid palindrome`;
}
// console.log(checkPalindrome('MADAM'));