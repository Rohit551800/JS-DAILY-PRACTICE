console.log('i am an external js file')
// use of type of
// var myName = "Rohit";
// console.log(myName);
// console.log(typeof myName);


// Convert string to number
// let str = "hello";
// console.log(typeof Number(str));

// or

// console.log(typeof +str);

// Convert number into string

// let x = 5;
// console.log(typeof String(x));
// console.log(typeof (x + ""));



// Falsy and Truly value

var x = 0;
if(x == true){
    console.log("this is true value");
}
else{
    console.log("this is false value");
}


// Expressions and Operators in JavaScript

// Assignment Operator : use to assign values

var myFavNum = 5; // '=' is assignment operator

var myString = "hellow world";

console.log(myString);
console.log(myFavNum);

// Assignment Operator

// 1--> Addition operator
var x = 10;
var y = 20;
var sum = x + y;
console.log(sum);

// 2--> Substraction operator
var x = 10;
var y = 20;
var sub = x - y;
console.log(sub);


// 3--> Multiplication operator
var x = 10;
var y = 20;
var mul = x * y;
console.log(mul);


// 4--> Division operator
var x = 16;
var y = 3;
var rem = x % y;
var quotiont = x / y;
console.log(rem);
console.log(quotiont);


//! what will be the output of 
// var result = "hello" / 2;

var str = "hello";
var num = 5;

var result = str / num;
console.log(result);


// What will be the output of 
// var result = 0.1 + 0.2 ?

var result = 0.1 + 0.2;
console.log(result.toFixed(2));


var result = "string" * 55;
console.log(result);


// String Operators

var str1 = "Hello";
var str2 = "World";
var str3 = str1 +" "+ str2;
console.log(str3);

// 
console.log("5" + 3); //Output = 53;



// Comparion Operator

// "==" checks wheather two numbers are equal;
console.log(5==5);
console.log(typeof ("5"==5)); // boolean because we are checking true/false condition


// "===" strictly Equal -->ye value k saath saath Datatype b check krta hai ki dono equal hai ya nahi
console.log("5" === 5); //output = false;


//"!=" Not-Equal  -- > check krta hai ki kya do value equal nahi hai ??
console.log(5 != 5); //output = false kyuki dono equal hai

// '>' Greater than --> check krta hai ki kya left-side vali value badi hai ??
console.log(5 > '2'); //output : true;

// '<' less than --> check krta hai ki kya left-side vali value choti hai ??
console.log(5 < 10); //output : true


//'>=' Greater-than-equal-to -->check krta hai ki kya left-side vali value right side vali value k greater ya equal hai ??
console.log(5 >= 7) ; //Output : false

//'>=' less-than-equal-to -->check krta hai ki kya left-side vali value right side vali value k smaller ya equal hai ??
console.log(5 <= 2); // output: false






//Logical Operators

// "&& 'AND operator' " -->Return true when both expression are true;
console.log(5 > 2 && 5 > 6); //Output : false -bcoz 1 condition is false

console.log(5 > 2 && 5 > 3); //Output : true -bcoz 2 condition are true

// "|| 'OR operator' "  -->Return false when 1 of the condition is true

console.log(5 > 2 || 5 < 3); // Output: Return true bcoz 1 condition is true


// "!" logical not operator --> return true if condition is false and vice-versa

var isOpen = false;
console.log(!isOpen);



// Program1:Check a person is above 18 and have lisence or not ??
var age = 19;
var hadDrivingLisence = true;

// if(age >= 18 && hadDrivingLisence) console.log("Yes");
// else console.log("No");




//Ternary operator
(age >= 18 && hadDrivingLisence)?console.log("yes"):console.log("no");



//Program-2 check a student is failed or passed if marks >= 60 pass else failed

let marks = 49;
(marks >= 60)? console.log("pass"):console.log("failed");

//Important Question
console.log(typeof("5" - 3)); //Output : number
console.log(2 < 12 < 5); //Output : True
console.log("20" + 10 + 10); //Ouput: 201010 and typeof = string









// Control Statements and Loops
//-->1 if-else statement

if(5==6){
    console.log("equal");
}
else{
    console.log("not equal")
}


//Problem CitizenShip
var age = 19;
var citizenShip = true;
var regisVote = false;

if(age >= 18){
    if(citizenShip && regisVote){
        console.log("Eligible for vote");
    }
    else if(citizenShip){
        console.log("Not eligible due to registration status");
    }
    else{
        console.log("Not eligible due to citizenship status");
    }
}
else{
    console.log("Not eligible for vote");
}


// WAP to print check whether a number is even or odd
var x = 4;
if(x%2 === 0) console.log("Divisible by 2");
else console.log("cannot be divisible by 2");


//WAP to check wheather a number is prime or not !!
var num = 16;
for(let i=2;i<num;i++){
    if(num % i == 0){
        console.log("Not a prime number");
        break;
    }  
}


//WAP to check weather a number is positive negative or zero
var num = -1;
if(num > 0) console.log("Positive");
else if(num < 0) console.log("Negative");
else console.log("Zero");



//Switch statement
var day = 4;
switch (day){
    case 1:
    console.log("Monday")
    break;
    case 2:
    console.log("Tuesday")
    break;
    case 3:
    console.log("Wednesday")
    break;
    case 4:
    console.log("Thrusday")
    break;
    case 5:
    console.log("Friday")
    break;
    case 6:
    console.log("Saturday")
    break;
    case 7:
    console.log("Sunday")
    break;
    default:
    console.log("Entered a wrong number");
}

let areaOfShapes = "circle";
switch(areaOfShapes){
    case "circle":
    var r = 3;
    console.log("Area of circle ="+(3.14 * r * r).toFixed(3));
    break;
    case "rectangle":
    var l = 3 , b = 2;
    console.log("Area of Rectangle ="(l * b));
    break;
    case "square":
    let side = 3;
    console.log("Area of Rectangle ="(side * side));
    break;

    default:
    console.log("Shape is not available yet");
}