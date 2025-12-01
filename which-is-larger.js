function whichIsLarger(f, g) {
  let a = f();
  let b = g();

  if (a === b) {
    return "neither";
  } else {
    return a > b ? "f" : "g";
  }
}

//Another solution
function whichIsLarger(f, g) {
  let a = f();
  let b = g();

  return a === b ? "neither" : a > b ? "f" : "g";
}
