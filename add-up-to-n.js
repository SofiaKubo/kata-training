function addUp(num) {
  if (typeof num !== "number" || !Number.isFinite(num)) {
    throw new Error("Argument must be a valid number");
  }
  if (!Number.isInteger(num) || num < 1) {
    throw new Error("Number must be a positive integer");
  }
  return (num * (num + 1)) / 2;
}
