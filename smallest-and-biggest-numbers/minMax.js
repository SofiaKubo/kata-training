function minMax(arr) {
  let minElement = arr[0];
  let maxElement = arr[0];

  arr.forEach((element) => {
    if (element > maxElement) maxElement = element;
    if (element < minElement) minElement = element;
  });
  return [minElement, maxElement];
}

// Optimized O(n) solution using a standard for loop
function minMax(arr) {
  let minElement = arr[0];
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minElement) minElement = arr[i];
    if (arr[i] > maxElement) maxElement = arr[i];
  }
  return [minElement, maxElement];
}

module.exports = minMax;
