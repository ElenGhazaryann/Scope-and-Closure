function add_ly(str) {
  let add_suffix = function (str) {
    return str + "ly";
  };

  return add_suffix(str);
}
console.log(add_ly("hopeless"));

function add_less(x) {
  return (function (str) {
    return str + "less";
  })(x);
}
console.log(add_less("hope"));
