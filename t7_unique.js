function unique(arr) {
  arr.sort();
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      return "Doesn't consist from uniques";
    }
  }
  return "Consists from uniques";
}
console.log(unique([1, 2, "a", 10, 5, 3]));
