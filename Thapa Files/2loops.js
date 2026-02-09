console.log("Loops Js folder");



//loops

//-->While loop

let i = 0;
while(i<10){
    console.log("Hellow world");
    i++;
}


//do-while loop
let j = 0;

do{
    console.log("Love you muski ❤️");
    j++;
}
while(j<5);


//For loop

for(let x = 0;x < 5 ;x++){
    console.log("Muskan ❤️");
}

let a  = 1;
while(a <= 10){
    console.log("5 * " + a + " = " + (5*a));
    a++;
}

//---->>Works only on console <<---- //


// let userInput ;
// let posNumber ;
// do{
//     userInput = prompt("enter any positive number");
//     posNumber = parseInt(userInput);
// }while(isNaN(posNumber) || posNumber < 0);
// console.log("The positive number is :" + posNumber);


//Sum of 1 - 10 numbers using for loop
let sum = 0;
for(let i=1;i<=10;i++){
    sum += i;
}
console.log("Sum of 1-10 numbers is :"+sum);


//Check wheather a year is a leap year or not !!
//Works only on console;

// let year ;
// while(true){
//     year = prompt("Enter the year:");
//     if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
//         console.log("Entered year is a leap year");
//         break
//     }
//     else{
//         console.log("entered year is not a leap year");
//     }
// }


//half paramid pattern

let x = 5;
for(let i=1;i<= x ;i++){
    let row = "";
    for(let j=0;j<i;j++){
        row += "* ";
    }
    console.log(row);
}