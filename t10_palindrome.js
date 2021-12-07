function isPalindrome(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return "Is not palindrome";
    }
  }
  return "Palindrome";
}
console.log(isPalindrome("annana"));
