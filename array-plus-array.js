function arrayPlusArray(arr1, arr2) {
  let sum = 0;

  for (let num of arr1) {
    sum += num;
  }

  for (let num of arr2) {
    sum += num;
  }

  return sum;
}
// return arr1.reduce((a, b) => a + b, 0) + arr2.reduce((a, b) => a + b, 0);

// function arrayPlusArray(arr1, arr2) {
//   return [...arr1, ...arr2].reduce((acc, num) => acc + num, 0);
// }

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));
