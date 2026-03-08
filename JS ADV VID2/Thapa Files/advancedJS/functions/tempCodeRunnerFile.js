const promise1 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("First"), 2000)
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("Second"), 100)
);

const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Third"), 1000)
);

Promise.all([promise1, promise3, promise2])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error);
  });