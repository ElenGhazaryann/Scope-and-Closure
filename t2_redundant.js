function redundant(str) {
  return (function () {
    return str;
  })();
}

let f1 = redundant("apple");
console.log(f1);
