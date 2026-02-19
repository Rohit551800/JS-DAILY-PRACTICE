//-------------------------->>Stirngs <<---------------------------------//
// console.log("----------------------------->>String File<<--------------------------------");


// can be created by single or double quotes
// single quotes is used with single character
// but multiple characters are created by double character



//--1>  String & it's properties
//--2>  Escape Character
//--3>  String Search Methods
//--4>  Extracting String Parts
//--5>  Extracting String Characters
//--6>  Replacing String Content
//--7>  Other useful Methods

//Indexing-- 0 to string.length - 1;



//-------------------->String length<<<<<<<<<<-----------


// String_name is used to get the total length of a string space is also calculated as length

// eg: 
// let str = "Hellow world";
// console.log(str.length); // output :12






//--------------------------------------->>>>Escape Character<<<<--------------------------------//
//    "/" only slash is used as escape character

// eg:

/*
use \ before the character you want to escape
//Description     Code    Result
for single quote : \'       : '
for double quote : \"       : "
for slash        : \\       : \
*/

// let str = "This is Rohit\'s \"Welcome myself\" book";
// console.log(str);






// ------------------------------------>>>>>String Searching <<<<<-------------------------------//

//---------------------------------->>1indexOf()<<------------------------------------


//: again it return the first occurance of the string in a string , or return -1 if not present
// String are -------->>Case Sensitive


// console.log(string.indexOf('Singh'));






//--------------------------------->>>>>Converting string into Array<<<<------------------------



// let string = "Rohit Singh Gouria";
// let str = Array.from(string);
// console.log(str);

 

// storing and printing the string elements and their indices
// const strMap = str.map((curElem , index) =>{
//     return `${curElem} - ${index} `;
// });

// console.log(strMap);





//-------------------------------------2lastIndexOf<<------------------------------//

// let str = "Hello JavaScript , welcome to out world best JavaScript course";
// console.log(str.length)
// console.log(str.lastIndexOf("JavaScript" , 40)); // 40 dalne k baad backward direction mai move karega and last character
//                                                 //character ko find karega so output: 6





//----------------------------------->>3Search()<<--------------------------------------//
// Search the string from starting if found it will return the index number of the string else return -1
// Best thing that can be use in Search is --------------->>>>Regex<<<<-------//

// Regex:case-sensitive character can be accessed using this   
//Syntax: string_name.search(\string_to_be_check\i);



//eg:
// let str = "Hello JavaScript , welcome to out world best JavaScript course";
// console.log(str.search(/JavaScript/i));





//----------------------------------->>>>>4match()<<<<--------------------------------------//

// let str = "Hello JavaScript , welcome to out world best JavaScript course";

// console.log(str.match("Javascript"));      //it is also a case-sensitive but if not match it will return null
// console.log(str.match("JavaScript"));

//return data in array format
/*
[
  'JavaScript',
  index: 6,
  input: 'Hello JavaScript , welcome to out world best JavaScript course',
  groups: undefined
  ]
  */
  
  //behind the scene match function "JavaScript" ko regular expression mai convert kar deta hai i.e: "/JavaScript/i" at global level
  
  //if you want the number of occurance of string
  
  // console.log(str.match(/JavaScript/g)); // matches at global level
  // output :[ 'JavaScript', 'JavaScript' ]
  
  
  
  
//--------------------------------->>>>5 matchAll()<<<<------------------------------------//

// return an iterator of all matches, providing detailed information about each match.Return an empty iterator if no match is found


// let str = "Hello JavaScript , welcome to out world best JavaScript course";
// console.log(str.matchAll("Javascript")); // no result found //output : Object [RegExp String Iterator] {}


//yaha pr b string ko matchAll() regular expression mai covert kar deta hai but global level pe karta hai //
//  i.e : string_name.matchAll(/Pattern/g);

  // let result = str.matchAll("JavaScript"); // detailed info about match result found
  
  
  //provide the output as iterator so to get the value we need to use loop;

  // loops and spread operator are used to access the value of iterator
  
  
  // for(let i of result){
  //   console.log(i);   //console.log(i[0]); -->to get the first value of array as i contain multiple values for single match
  // }
  
  // or
  
  // spread opeator
  
  // console.log(...result);
  
  /*
  Output:
  
  [
    'JavaScript',
    index: 6,
    input: 'Hello JavaScript , welcome to out world best JavaScript course',
    groups: undefined
    ]
    [
      'JavaScript',
      index: 45,
      input: 'Hello JavaScript , welcome to out world best JavaScript course',
      groups: undefined
      ]*/
      
      
      
      
      
      
      //-------------------------------------------->>>>>includes()<<<<<-----------------------------------------//
      
      
      // return true of false
      
      
// let text = "Hello JavaScript , welcome to out world best JavaScript course";
// let includeResult = text.includes("JavaScript");
// console.log(includeResult);        //regular expression cannot be used



//
      


//--------------------------------------->>>>startsWith()<<<<---------------------------------------------------//
//return true or false

// let text = "Hello JavaScript , welcome to out world best JavaScript course";
// console.log(text.startsWith("Hello JavaScript")); // return true



//----------------------------------------->>>>>endsWith()<<<<<-------------------------------------------------//
// return true or false

// let text = "Hello JavaScript , welcome to out world best JavaScript course";
// console.log(text.endsWith("urse"));




//----------------------------->>>>>>String Extraction <<<<<---------------------------------------------------//
//----------------------------->>>>>>Slice()<<<<<--------------------------------------------------------------//



// slice extracts a part of a string and return the extracted part in a new string

// let text = "Hello JavaScript , welcome to out world best JavaScript course";
// console.log(text.slice(6,17));




//--------------------------------->>>>>Substring()<<<<<------------------------------------------------//
//depricated
//Extracts a portion of the string based on starting and ending indices
//same as slice()



//------------------------------------->>>>>Replace()<<---------------------------------------//
// regex can be used
// use to replace the string with any value eg??

// let text = "Hello JavaScript , welcome to out world best JavaScript course";
// console.log(text.replace("H" , "Rohit"));


// Agar har jagah element ki occurance ko chnage krna hai toh use replaceAll() is used

//eg

// console.log(text.replaceAll("JavaScript" , "Rohit"));






//------------------->>charAt()<<<<------------------------------

// let text = "Hello JavaScript , welcome to out world best JavaScript course";
// console.log(text.charAt(4));  //output at index = "o" if didn't get any value return a empty string



//---------------------->>>>>>>charCodeAt()<<<<--------------------------

// let text = "Hello JavaScript , welcome to out world best JavaScript course";
// console.log(text.charCodeAt(7)); // 97 that is ascii value of a 




//---------------------------------->>>>>at()<<<<<-----------------------------------------------//

// let text = "Hello JavaScript , welcome to out world best JavaScript course";
// on negative value the indexing is started from the right side from -1 to -n


// console.log(text.at(-2));





//---------------------------->>>>>>>trim()<<<<--------------------------------------------//



// let text = "          hello , world      ";
//used to remove the extra space from the string
// let result = console.log(text.trim());

//---------------------------->>>>split() , reverse() , join () <<<<------------------------------------------//



// Interview Questions 

//Qno.1 Write a function to print a to z alphabets ??
// const result1 = () => {
//   for (let i = 97;i<=122;i++){
//     console.log(String.fromCharCode(i));
//   }
// }
// result1();



//Qno.2 Write a function to count the number of vowels in a string
// const result2 = (s) =>{
//   let vowels = 'aeiou';
//   let counter =  0;
//   for(let i of s){
//     if(vowels.includes(i)) counter++;
//   }
//   return counter;
// }  

// console.log(result2("abcdefghijklmnopqrstuvwxwzaaaaaa"));


//Qno.3 Write a function to check if all the vowels present in a string or not ??


// const result3 = (s) => {
//   let vowels = "aeiou";
//   for(let i of vowels){
//     if(!s.includes(i)){
//       return false;
//     }
//   }
//   return true;
// }
// console.log(result3("a b c e i o y u"));



//check the given string a pangram or not !!!!!!
// string : "the quick brown fox jumps over the lazy dog"


// const result = (str) => 
// {
//   let totalChar = "";
//   for(let i=97;i<=122;i++){
//     totalChar += String.fromCharCode(i);
//   }
//   console.log(totalChar);
//   for(let i of str){
//     if(i != " " && !totalChar.includes(i)) return false;
//   }
//   return true;
// }



//better solution using set

// const result = (str) => {
//   const set = new Set();
//   for(let i of str.toLowerCase()){
//     if(i >= 'a' && i <= 'z'){
//       set.add(i);
//     }
//   }
//   return set.size === 26;
// }

// console.log(result("the quick brown fox jumps over the lazy dog"));