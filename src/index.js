import readlineSync from "readline-sync";
// import createQuestionAnswerCalc from './games/createCalculatorQuestionAnswer'

const startGames = (description, createQuestionAnswer) => {
  console.log("Welcome to the Brain Games!");
  const Name = readlineSync.question("May I have your name?");
  console.log(`Hello, ${Name}!`);
  console.log(`${description}\n`);
  let carentAttempt = 0;

  while (carentAttempt < 3) {
    console.log(carentAttempt);
    const { userQuestion, rightAnswer } = createQuestionAnswer();

    const userAnswer = readlineSync.question(
      `Question: ${userQuestion} \nYou answer `
    );
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

export default startGames;
