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


let fruits = ["Apple" , "Banana" , "Mango" , "Orange" , "Pineapple"];


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
