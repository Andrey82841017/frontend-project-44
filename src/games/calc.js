import startGames from "../index.js";
import createQuestionAnswerCalc from "./createCalculatorQuestionAnswer.js";

const description = "What is the result of the expression?";

startGames(description, createQuestionAnswerCalc);
