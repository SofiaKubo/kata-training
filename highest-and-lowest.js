function highAndLow(numbers) {
  const numArray = numbers.split(" ").map(Number);
  let highest = numArray[0];
  let lowest = numArray[0];
  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] > highest) {
      highest = numArray[i];
    }
    if (numArray[i] < lowest) {
      lowest = numArray[i];
    }
  }
  return `${highest} ${lowest}`;
}
