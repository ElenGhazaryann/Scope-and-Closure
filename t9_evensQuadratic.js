function quadraticEven(arr) {
  let pow = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      pow += arr[i] ** 2;
    }
  }
  return pow;
}
console.log(quadraticEven([2, 3, 5, 4, 6]));
