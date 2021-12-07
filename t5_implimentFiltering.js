function filterFalsyValues(values) {
  return function (val) {
    return Boolean(val) !== false;
  };
}

const values = ["hello", 1233, []];
console.log(values.filter(filterFalsyValues(values)));
