const addUp = require("./add-up-to-n");

function test(name, fn) {
  try {
    fn();
    console.log(`✔️  ${name}`);
  } catch (err) {
    console.error(`❌  ${name}`);
    console.error("   ", err.message);
  }
}

test("addUp(1) should return 1", () => {
  if (addUp(1) !== 1) throw new Error("Expected 1");
});

test("addUp(4) should return 10", () => {
  if (addUp(4) !== 10) throw new Error("Expected 10");
});

test("addUp(10) should return 55", () => {
  if (addUp(10) !== 55) throw new Error("Expected 55");
});

test("addUp(-1) should throw error", () => {
  let error = false;
  try {
    addUp(-1);
  } catch {
    error = true;
  }
  if (!error) throw new Error("Expected error for negative number");
});

test("addUp('5') should throw error", () => {
  let error = false;
  try {
    addUp("5");
  } catch {
    error = true;
  }
  if (!error) throw new Error("Expected error for string");
});

test("addUp(NaN) should throw error", () => {
  let error = false;
  try {
    addUp(NaN);
  } catch {
    error = true;
  }
  if (!error) throw new Error("Expected error for NaN");
});

test("addUp(3.14) should throw error", () => {
  let error = false;
  try {
    addUp(3.14);
  } catch {
    error = true;
  }
  if (!error) throw new Error("Expected error for non-integer");
});
