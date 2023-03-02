import randomNumber from "../beg/randomNumber.js";

const createQuestionAnswerCalc = () => {
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const operation = randomNumber(1, 3);

  let userQuestion;
  let rightAnswer;

  if (operation === 1) {
    userQuestion = `${num1} * ${num2}`;
    rightAnswer = num1 * num2;
  }
  if (operation === 2) {
    userQuestion = `${num1} + ${num2}`;
    rightAnswer = num1 + num2;
  } else if (operation === 3) {
    userQuestion = `${num1} - ${num2}`;
    rightAnswer = num1 - num2;
  }

  return {
    userQuestion: String(userQuestion),
    rightAnswer: String(rightAnswer),
  };
};

export default createQuestionAnswerCalc;
