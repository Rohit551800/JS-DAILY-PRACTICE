//------------------------------------->>>>>Math Objects <<<<<----------------------------------------------------//


//Math object do not work with BigInt values


//Differece between Round() , Floor() , ceil()


//--1> Math.round() 
//Round the nearest value eg console.log(Math.round(4.5)); //Output:5
// console.log(Math.round(4.1));//Output:4

//Math.floor() 

//Always rounds the nearest lowest value
//Ex:
// console.log(Math.floor(4.9));//Output : 4
// console.log(Math.floor(4.1));//Output : 4




// //Mathout.ceil()
// //Eg:
// console.log(Math.ceil(4.1)); //output:5
// console.log(Math.ceil(4.6)); //output:5




//------------------------------->>Math.PI ->contains the PI value<<--------------------------------//

const piValue = Math.PI;
// console.log(piValue);




//------------------------------>>>Basic Operation<<-----------------------------------------------//

//Math.abs() : The Math.abs() static method use to return the absolute value of a number
// In simple way , how far the number is from 0 , It will always be positive

// console.log(Math.abs(5));
// console.log(Math.abs(-5));
// console.log(Math.abs(-5 + 7.6).toFixed(2));





//-------------------------------->>Math.trunc(x): return the integer part of x<<------------------------------//
// same as Math.floor()
// console.log(Math.trunc(4.7));
// console.log(Math.trunc(-3.7)); //output : -3 bcoz 0.7 is eliminated but
// console.log(Math.floor(3.7)); //output: -4 bcoz floor return lowest nearest value so it will be -4



//-------------------------------------->>Exponential & Logarithmic Functions:<<-----------------------//

//-->>>Math.pow(x,y): return the value of x to the power of y
// console.log(Math.pow(2,5)); //Output:32
// console.log(2 ** 5);


//-->>> Math.sqrt(x): return the square root of x 

// console.log(Math.sqrt(36));//output:6


//-->>>>Math.log(x): return the natural logarithm of x.
// let logRes = Math.log(4);
// console.log(logRes.toFixed(3));


//!----------------------------->>Generate Random Number <<----------------------------------//

//Math.random(): return a random number between 0 (inclussive , and 1 (exclusive) 

console.log((Math.random()*100).toFixed(3));









const obj = {
    name : "Rohit Singh Gouria" ,
    age : 21 , 
    college: "Arya College Of Engineering & I.T",
    address : "Jammu & Kashmir",
    mobile: "7051715921"
}



// console.log(obj.college);