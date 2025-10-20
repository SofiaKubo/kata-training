function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || input.length === 0) {
    return [];
  }

  const positives = input.filter((num) => num > 0);
  const negatives = input.filter((num) => num < 0);

  return [positives.length, negatives.reduce((acc, num) => acc + num, 0)];
}

// function countPositivesSumNegatives(input) {
//   if (!Array.isArray(input) || input.length === 0) {
//     return [];
//   }

//   return input.reduce((result, num) => {
//     if (num > 0) result[0]++;
//     else if (num < 0) result[1] += num;
//     return result;
//   }, [0, 0]);
// }

// function countPositivesSumNegatives(input) {
//   if (!Array.isArray(input) || input.length === 0) {
//     return [];
//   }

//   let positivesCount = 0;
//   let negativesSum = 0;

//   for (let num of input) {
//     if (num > 0) {
//       positivesCount++;
//     } else if (num < 0) {
//       negativesSum += num;
//     }
//   }

//   return [positivesCount, negativesSum];
// }
