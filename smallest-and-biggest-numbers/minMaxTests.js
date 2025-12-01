const minMax = require("./minMax");

function test(name, fn) {
  try {
    fn();
    console.log(`✔️  ${name}`);
  } catch (err) {
    console.error(`❌  ${name}`);
    console.error("   ", err.message);
  }
}

test("minMax([1, 2, 3, 4, 5]) should return [1, 5]", () => {
  const result = minMax([1, 2, 3, 4, 5]);

  if (!Array.isArray(result)) {
    throw new Error("Expected result to be an array");
  }

  if (result.length !== 2) {
    throw new Error("Expected array of length 2");
  }

  if (result[0] !== 1 || result[1] !== 5) {
    throw new Error("Expected [1, 5]");
  }
});

test("minMax([2334454, 5]) should return [5, 2334454]", () => {
  const result = minMax([2334454, 5]);

  if (!Array.isArray(result)) {
    throw new Error("Expected result to be an array");
  }

  if (result.length !== 2) {
    throw new Error("Expected array of length 2");
  }

  if (result[0] !== 5 || result[1] !== 2334454) {
    throw new Error("Expected [5, 2334454]");
  }
});

test("minMax([1]) should return [1, 1]", () => {
  const result = minMax([1]);

  if (!Array.isArray(result)) {
    throw new Error("Expected result to be an array");
  }

  if (result.length !== 2) {
    throw new Error("Expected array of length 2");
  }

  if (result[0] !== 1 || result[1] !== 1) {
    throw new Error("Expected [1, 1]");
  }
});
