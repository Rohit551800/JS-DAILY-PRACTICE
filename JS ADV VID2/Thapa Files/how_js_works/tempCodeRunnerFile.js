const fun2 = async () => {
    console.log("fun2 starts and ends");
};

const fun1 = () => {
  console.log("fun1 is start");
  fun2();
  console.log("fun1 ends");
};
fun1();