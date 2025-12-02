const prompt = require("prompt-sync")();

function guessNumber() {
  const secretNumber = Math.floor(Math.random() * 5) + 1;
  const userAnswer = +prompt("Введите число:");

  if (!Number.isInteger(userAnswer) || userAnswer < 1 || userAnswer > 5) {
    console.log("Необходимо было ввести целое число от 1 до 5 включительно.");
    return;
  }

  if (userAnswer === secretNumber) {
    console.log(`Верно, я загадал число ${secretNumber}.`);
  } else {
    console.log(`Нет, не ${userAnswer}, я загадал число ${secretNumber}.`);
  }
}
