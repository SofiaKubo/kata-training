function minMax(arr) {
  let minElement = arr[0];
  let maxElement = arr[0];

  arr.forEach((element) => {
    if (element > maxElement) maxElement = element;
    if (element < minElement) minElement = element;
  });
  return [minElement, maxElement];
}

module.exports = minMax;
