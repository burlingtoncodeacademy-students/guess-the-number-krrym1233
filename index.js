const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  //let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  //console.log('You entered: ' + secretNumber);
  // Now try and complete the program.
  let max = 100
  let min = 1
  //function to establish a number range to have the computer guess within
  function randomNum(max, min) {
    let range = max - min + 1

    return Math.floor(Math.random() * range) + min
  }

  let rng = (randomNum(1, 100))
  console.log(rng)
  let question = await ask("Y or N ")
  if (question === "Y") {
    process.exit()
  } else {
    let q2 = await ask("Is it higher or lower? ")
    if (q2 === "higher") {
      min = rng + 1
      let number = randomNum(max, min)
      console.log(number)
    }if (q2 === "lower") {
     max = rng - 1
     let number = randomNum(max, min)
    console.log(number)
    }
  }
} 
    // let q3 = await ask("Is it higher or lower? ")
     // if (q3 === "higher") {
       // min = rng + 1
      //  let number2 = randomNum(max, min)
       // console.log(number2)
      //}if (q3 === "lower") {
        //min = rng - 1
        //let number2 = randomNum(max, min)
        //console.log(number2)