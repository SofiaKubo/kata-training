function countTrue(arr) {
  let result = 0;

  for (const elem of arr) {
    if (elem === true) {
      result++;
    }
  }

  return result;
}

function countTrue(arr) {
  return arr.filter((value) => value === true).length;
}
