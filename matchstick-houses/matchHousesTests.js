const matchHouses = require("./matchHouses");

function test(name, fn) {
  try {
    fn();
    console.log(`✔️  ${name}`);
  } catch (err) {
    console.error(`❌  ${name}`);
    console.error("   ", err.message);
  }
}

test("matchHouses(0) should return 0", () => {
  if (matchHouses(0) !== 0) throw new Error("Expected 0");
});

test("matchHouses(1) should return 6", () => {
  if (matchHouses(1) !== 6) throw new Error("Expected 6");
});

test("matchHouses(4) should return 21", () => {
  if (matchHouses(4) !== 21) throw new Error("Expected 21");
});

test("matchHouses(87) should return 436", () => {
  if (matchHouses(87) !== 436) throw new Error("Expected 436");
});
