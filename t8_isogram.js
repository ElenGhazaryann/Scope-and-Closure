function isIsogram(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      arr.push(str[i]);
    }
  }
  arr.sort();
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      return "Is not isogram";
    }
  }
  return "Is Isogram";
}
console.log(isIsogram("ia m"));
