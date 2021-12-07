function sum(a) {
  return function (b) {
    return a + b;
  };
}

const addOne = sum(1);

console.log(addOne(2));
console.log(addOne(4));

const addTen = sum(10);

console.log(addTen(2));
console.log(addTen(10));
