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


// let fruits = ["Apple" , "Banana" , "Mango" , "Orange" , "Pineapple"];
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

// let fruits = ["Apple" , "Banana" , "Mango" , "Orange" , "Pineapple"];

// console.log(fruits.splice(1)); //here 1 is the starting index so the 1st place element will not be print 

//lets say i want to delete orange and it is present at index number 4

// fruits.splice(3,1);
// console.log(fruits);

//this will delete the orange




//lets say i want to add something at same place suppose in place of mango

// fruits.splice(2,0,"Grapes");
// console.log(fruits)
//Output : [ 'Apple', 'Banana', 'Grapes', 'Mango', 'Orange', 'Pineapple' ]




//------------>>We can also delete and insert multiple items by giving deleteCount and adding multiple items respectively





//----------Searching in Arrays

/*--->Seaching anf Filters in array
    -->For Seaching we have 

    ---->1)indexOf
    ---->2)lastIndexOf
    ---->3)includes
*/


// const numbers = [1,2,3,4,5,6,7,8,9];
// const persons = ["Ram","Hari","Sita","Bishal","Gita"];
//------------------------------------>indexOf()<----------------------------------------//


//indexOf():method use to return the first index at which a given element can be found in the array , or -1 if it is not present
// Syntax: indexOf(searchElement , fromIndex);
//eg

// console.log(persons.indexOf("Sita")); 
//return 2

// console.log(numbers.indexOf(4)); // return 4


//------------------------------------->Includes()<--------------------------------//

//Includes() : method check wheather an array includes a certain element , returning true or false.
//Syntax: Includes(searchElement , fromIndex) ;
//Output : T/F

//eg
// console.log(persons.includes("Hari")); /// fromIndex is not necessary in includes
// console.log(numbers.includes(7));




//------------------------------------->lastIndexOf()<-------------------------------------//


// lastIndexOf():method you to return the index of last element of the given element //incase their are any dupplicates it
//will ignore the 1st element and return the last index of element

//Syntax: lastIndexOf(searchElement , fromIndex); //NOTE::::here fromIndex start from 0 till given value of fromIndex

//egs
// const numbers1 = [1,2,3,4,5,4,7,4,9]; // 4 is repeating in this array
// const result = numbers1.indexOf(4);
// const result1 = numbers1.lastIndexOf(4);

// console.log(result);
// console.log(result1);

// console.log(numbers1.lastIndexOf(4 , 6)); //started from 0 till 6 thats why it will return 5




//todo Chalange time
// 1>Add Dec at the end of the array
// const months = ["Jan" , "Feb" , "mar" , "Apr" , "May" , "Jun" , "July"];
// //months.push("Dec"); //-->method 1
// months.splice(months.length , 0 , "Dec");
// console.log(months);

// 2>Update mar to March
// let index = months.indexOf("mar");
// months[index] = "March";
// console.log(months);

// 3>Delete Jun from array
// let index = months.indexOf("Jun");
// months.splice(index , 1);
// console.log(months);

//--4> return value of splice method
// on writing splice method it will return a empty value








//-------------------------->>>> Filters in Array <<<<---------------------------------//

// -- Search + filter 
//find : method use to find the first element in an array that satisfies a providing test
// if no element found then it will return undefined

// Syntax : same as of map

/* array_name.find(function callback(currentElement , index , array_name){
                Your logic
} , thisValue);

// ----------------OR---------------------------//
array_name.find((curentElement , index , array_name) =>{
                your logic
            }, thisValue);



*/
// const numbers = [1 , 2 , 1 , 4 , 4 , 5, 4 ,8 , 9 , 10 , 2 , 4 , 3];
// const result = numbers.find((curElem , index , arr) =>{
    // const result = numbers.find((curElem , index , arr) =>{
        //         if(curElem > 5){
//             return curElem;            //working of find index
//         }
// });
// console.log(result); //return element 8 bcoz its the 1st occurance element in the array which is > 5;

//Ques: 1 --> multiply the whole array by 5 and store in a variable then find the index of the 1st element
//element in the array which is greater than 10

// const result = numbers.map((currElement) => currElement * 5); // {} not use bcoz only single line code was there

// const result2 = result.findIndex((currElement) =>{
    //     return currElement > 10;
    // });
    // console.log(result2);
    
    
    
    
    
    
    

//Working of filter // use to get the remaining numbers which satisfies the function condition of find method 
//eg : if we use find in an array : find the number which is greater than 4 
//find will get the first element which is greater than 4
// but the filter will get all the numbers that are greater than 4


// eg
// const numbers = [1 , 2 , 1 , 4 , 4 , 5, 4 ,8, 3];

// const result1 = numbers.find((currElement) => currElement > 4);
// console.log(result1);
// //Output : 5

// const result2 = numbers.filter((currElement) => currElement > 4);
// console.log(result2);
// //Output [ 5, 8, 9, 10 ]

//Suppose I want to delete all the 4's from the array So i will you filter method
// let val = 4;
// let updatedCart = numbers.filter((curElem) =>{
    //     return curElem !== val;
    //     });
    
    // console.log(updatedCart);
    
    
    
    
    //Interview Question -- Array Filter + Object
    //Given an array of products where each element has a name and a price , write a funtion that uses the 
    //filter method to return an array containing only the products with a price less than or equal to 500
    
    // const products = [
        //     {name:"Laptop" , price:1200} , 
        //     {name:"Phone" , price:800} , 
        //     {name:"Tablet" , price:300} , 
        //     {name:"SmartWatch" , price:500} 
        // ]
        
        // const result = products.filter((currElem) => currElem.price <= 500 );
        
        // console.log(result);
        
        
        
        //How to remove Duplicates from an array||
        //Set is used to contain only the unique values
        
        // eg 
        // const numbers = [1 , 2 , 1 , 4 , 4 , 5, 4 ,8, 3];
        // console.log(new Set(numbers));// return new values  //bcoz of using set we will only get the unique values
        
        
        
        //-----------> In case you want array of unique values then add the set in [] square brackets
        // console.log([... new Set(numbers)]); // ... is known as spread operator
        
        //----------------------------------->Sort and Comapare in Array<------------------------------------//
        
        
        
        // const fruits = ["Banana" , "Apple" , "Orange" , "Mango"];
        
        // fruits.sort();
        // console.log(fruits); // Sort the data according to ASCII value or character vise


        // const numbers = [1 , 2 , 1 , 4 , 4 , 5, 4 ,8, 3];
        // numbers.sort();
        // console.log(numbers);        // Sort in Ascending order

        //Sorting Array in decending order


        //Syntax:
        // const sortedNumber = numbers.sort((a , b) =>{
        // if(a > b) return -1; // keep the number
        // else return 1;  // switch the number
        // });
        // console.log(numbers);


        //using map make square of each number

        // let number = [ 1 ,2 ,3 ,4 ,5];

        // let result = number.map((currElem) => currElem * currElem);
        // console.log(result);



        //using the map method , write a function that take an array of strings and returns a new array where each string is capatalize

 
        

        //using map make square of each number if number is even

        // let number = [ 1 ,2 ,3 ,4 ,5];

        // let result = number.map((currElem) =>{
        //     if(currElem % 2 == 0) {
        //         return currElem * currElem ;
        //     }
        //     // else{
        //     //     return currElem;
        //     // }
        // }).filter((currElem) => currElem != undefined);  // we are filtering the number from undefined
        // console.log(result);

 //write a prgram to add Mr. before each string of array
    // const name1 = ["Rohit" , "Rakesh" , "Kallua"];
    // const names = name1.map((curElem) => `Mr. ${curElem.toUpperCase()}`);
    // console.log(names);


        //---------------->>Reduce() <--------------------------//


        //Reduce method is use sum a large amount of data into a single value
// const productPrice = [100 ,299 , 399 , 1499 , 199];
// const totalPrice = productPrice.reduce((accumulator , curElem) =>{
//     return accumulator + curElem; 
// } , 0);     // 0 is the instial value of accumulator

// //This function will return the whole sum of productPrice function

// console.log(totalPrice);



 