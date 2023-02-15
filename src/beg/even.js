import readlineSync from "readline-sync";
const description =
  'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  console.log("Welcome to the Brain Games!");
  const Name = readlineSync.question("May I have your name?");
  console.log(`Hello, ${Name}!`);
  console.log(description);
  let carentAttempt = 0;

  while (carentAttempt < 3) {
    const randomNumber = Math.floor(Math.random() * 10);
    const rightAnswer = randomNumber % 2 === 0 ? "yes" : "no";
    const userAnswer = readlineSync.question(`Question: ${randomNumber} `);
    if (rightAnswer === userAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}').Let's try again, ${Name}!`
      );
      break;
    }
    carentAttempt += 1;
    if (carentAttempt === 3) {
      console.log(`Congratulations, ${Name}!`);
    }
  }
};
export default {};
game();
