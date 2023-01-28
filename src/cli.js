// const readline = require("readline-sync").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question(`What is your name?`, (name) => {
//   console.log(`Hi ${name}!`);
//   readline.close();
// });

import readlineSync from "readline-sync";
console.log("Welcome to the Brain Games!");

var Name = readlineSync.question(`May I have your name?`);
console.log("Hello, " + Name + "!");

export default {};
