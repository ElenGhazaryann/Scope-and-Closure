function largestProduct(arr) {
  let product = arr[0] * arr[1];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] * arr[i - 1] > product) {
      product = arr[i] * arr[i - 1];
    }
  }
  return product;
}
console.log(largestProduct([1, 4, 5, 23, 2, 3, 4]));
