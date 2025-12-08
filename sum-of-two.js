function sumOfTwo(a, b) {
  if (a === undefined || b === undefined) {
    throw new Error("Должно быть два аргумента");
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Аргументы должны быть числами");
  }
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error("Числа должны быть конечными");
  }
  return a + b;
}

console.log(sumOfTwo(8, 3));
console.log(sumOfTwo(1 / 3, 5));
console.log(sumOfTwo(8, "abc"));
console.log(sumOfTwo(8, NaN));
console.log(sumOfTwo(8));
