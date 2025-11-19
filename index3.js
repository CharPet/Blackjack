// for (let count = 1; count < 11; count++) {
//   console.log(count);
// }

// --------------------------------------------------

for (let count = 10; count <= 100; count += 10) {
  console.log(count);
}

// --------------------------------------------------

let sentence = ["Hello", "my", "name", "is", "Per"];
let greetingEl = document.getElementById("greeting-el");

for (let i = 0; i < sentence.length; i++) {
  greetingEl.textContent += sentence[i] + " ";
}

// --------------------------------------------------

let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return player1Time;
  }
}

let fastestRace = getFastestRaceTime();
console.log(fastestRace);

// --------------------------------------------------

function getTotalRaceTime() {
  return player1Time + player2Time;
}

let totalRaceTime = getTotalRaceTime();
console.log(totalRaceTime);

// --------------------------------------------------

let randomNumber = Math.random() * 6;
console.log(randomNumber);

// --------------------------------------------------

let flooredNumber = Math.floor(3.4567);
console.log(flooredNumber);

// --------------------------------------------------

let randomNumber2 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber2);

// --------------------------------------------------

function rollDice() {
  let dice = Math.floor(Math.random() * 6 + 1);
  return dice;
}

console.log(rollDice());

// --------------------------------------------------
