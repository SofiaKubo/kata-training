function positiveSum(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, num) => acc + (num > 0 ? num : 0), 0);
}

// function positiveSum(arr) {
//   if (!Array.isArray(arr) || arr.length === 0) {
//     return 0;
//   }
//   return arr.filter((num) => num > 0).reduce((acc, num) => acc + num, 0);
// }

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));
console.log(positiveSum("invalid input"));
