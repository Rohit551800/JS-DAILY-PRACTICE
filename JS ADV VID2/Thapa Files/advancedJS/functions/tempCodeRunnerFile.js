const sum = (a , b) => {
  return Math.sum(a,b);
}
const div = (a , b)=>{
  return Math.div(a,b) ;
}
const multiply = (sum , div) => {
  let a = sum(5 , 7);
  let b = div(36 , 6);
  return Math.multiply(a,b);
}

console.log(sum(5 , 7));
console.log(div(36 , 6));
console.log(multiply(sum , div));
