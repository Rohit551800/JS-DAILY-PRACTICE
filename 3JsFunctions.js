console.log("This is Js function file");

//Function to sum two values

/*function sum(a , b){
    return (a+b);
}

console.log(sum(5,5));

let x = sum(10 , 12);
console.log(x);
*/

//function declaration

function greet(){
    console.log("Welcome to thapa technical course of javascript");
}

//fuction invocation

// greet();

//Note : It is a best practice to declare the function before you call them


//pratice :
//Write a function to return the sum of two numbers:

function sumOfTwoNumbers(a , b){
    return (a+b);
}

//function call
// console.log(sumOfTwoNumbers(5,6));


//parameters of a function:if we pass any value to a funtion k/as function parameter

// eg
function sub(a , b){  //here a , b inside the sub function are the parameters for the sub function
    return (a - b);
}

// console.log(sub(4,2));

function greet2(name){
    return console.log("Hello "+ name + ",Welcome to Thapa technical course.");
}

// greet2 ("Vinod");
// greet2 ("Rohit");

//Function expression
//function expression mtlb kisi variable mai function ki value store karna


var result = function sum(a,b){
    return (a+b);
}
// console.log(result(10 , 16));


//Anonymous function
var result = function(a,b){
    return (a+b);
}
// console.log(result(10 , 16));



//IIFE automatically run when page is loaded
// (function (a , b){
//     console.log(a+b);
// })(5 , 19); 

// using function expression
var result = (function (a , b){
    return (a + b);
})(5 , 18);

// console.log("Sum of two numbers is :" + result);



//Write a function to reverse a string 

var result = function (s){
    var i = 0 , j = s.length;
    while(i<j){
        var temp = s[i];
        s[i] = s[j];
        s[j] = temp;

        i++;
        j--;
    }
    return s;
}

console.log("Reverse of the given string is :"+result("ROHIT"));




//In EcmaScript 2015 includes 

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
