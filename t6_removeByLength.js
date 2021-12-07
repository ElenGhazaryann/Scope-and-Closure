function filterByLength(arr) {
  return function (val) {
    return val.length > 3;
  };
}
let arr = ["kia", "tesla", "bmw", "mercedes"];
console.log(arr.filter(filterByLength(arr)));
