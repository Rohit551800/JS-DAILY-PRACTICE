const arr = ["My name", "is vinod", "thapa"];
const newArr = arr.flatMap((curVal) => curVal.split(" "));
console.log(newArr);