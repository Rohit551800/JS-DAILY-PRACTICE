let a = 10;
let b = 30;

// a = a+b;
// b = a - b;
// a = a - b;

console.log(a , b);
// a=30, b=10
//? Mostly will do using 3rd var
// let c = b; //c=30
// b = a; // b=10
// a = c; //a=30

//? without using 3rd variable
[a, b] = [b, a];
console.log(a, b);