//                                         Array in JavaScript


// let arr = [10 , 20 , 30];
// console.log(typeof arr);
// console.log(arr[2]); //Output : 30
// console.log(arr.at(-1));//Output : 30



//Creating Arrays 
//->>Method 1  using array constructor

// let fruits = new Array("Apple" , "Banana" , "Mango");
// console.log(fruits);



//->>Method 2 using array literals

// let arr1 = [1 , 2 , 3 , 4];
// console.log(arr1);



//->>Method 3  creating empty Array

// let arr2 = [];




//? Aceesing Array elements
// let fruits = ["Apple" , "Banana" , "Mango" , "Orange"];
// console.log(fruits[1]);



//?Modifying Array Elements

// let fruits = ["Apple" , "Banana" , "Mango" , "Orange"];
// fruits[2] = "Pineapple";
// console.log(fruits[2]);




//                                  Array Traversal / Iterating over Array


// let fruits = ["Apple" , "Banana" , "Mango" , "Orange" , "Pineapple"];


//For loop
// for(let i=0;i<fruits.length;i++){
    //     console.log(fruits[i]);           //Simple for loop
    // }
    
    
    
//for-of loop
// for(let items of fruits){
    //     console.log(items)       //use to iterate over the items of an object
    // }
        
        
        
        
//for-in loop
// for(let items in fruits){
    //     console.log(items);      //use to iterate over the properties (including indices) of an object
    // }
            
            
            
            
            
//for-each loop

// forEach()
// Array ke har element par loop lagata hai
// Automatically next element par chala jaata hai


let fruits = ["Apple" , "Banana" , "Mango" , "Orange" , "Pineapple"];
// fruits.forEach(function
// callback(curElem , index , fruits){
//     console.log(`${curElem} ${index}`);
// });


// //using fat arraw
// fruits.forEach((curElem , index , fruits)=>
//     {
//         console.log(curElem);
//     });



//Map
// fruits.map(function
// callback(curElem , index , fruits){
//     console.log(`${curElem} ${index}`);
// });


//using fat arraw
// const myResult = fruits.map((curElem , index , fruits)=>
//     {
//         return {curElem , index};             //cannot be done in for each loop
//     });

//     console.log(myResult);



//Write a program to multiply each element with 2 

// const numbers = [1 ,2 ,3 ,4 ,5];
// numbers.forEach((curElem , index , numbers) =>{
//     console.log(`Element ${curElem} multiply with 2 is:${2*curElem}`);
// })



// const result = numbers.map((curElem , index , numbers) =>{
//     return `Element ${curElem} multiply with 2 is:${2*curElem}`;
// })
// console.log(result);



//How to Insert , Add ,Replace and Delete Elements in Array(CRUD)

/*
-->push() : use to insert 1 or more elements in the end of the array || syntax: array_name.push(element);||Alse return new length
-->pop()  : use to remoce the last element from the end of the array || syntax: array_name.pop();
*/

// egs
// let arr = ["Apple" , "Orange" , "Pineapple"];
// console.log(arr);
// // arr.push("grapes");
// arr.unshift("grapes"); //-->insert new element in the begining of the array
// console.log(arr);
// arr.shift(); //->delete 1st element of array
// // arr.pop();
// console.log(arr);




//If we want to insert of delete anywhere in the array
//Splice() function is used 

//Syntax:
// splice(start , deleteCount , item1 , item2 , ..... itemN);