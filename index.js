let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

// console.log(sum);

// ------------------------------

// if (sum < 21) {
//   console.log("Do you want to draw a new card?");
// } else if (sum === 21) {
//   console.log("Wohoo! You've got Blackjack!");
// } else {
//   console.log("You're out of the game!");
// }

// ------------------------------

// let age = 22;

// if (age < 21) {
//   console.log("You can not enter the club");
// } else {
//   console.log("Welcome!");
// }

// ------------------------------

// let age2 = 100;

// if (age2 < 100) {
//   console.log("Not eligible");
// } else if (age2 === 100) {
//   console.log("Here is your birthday card from the King!");
// } else {
//   console.log("Not eligible, you have already gotten one");
// }

// ------------------------------

if (sum <= 20) {
  message = "Do you want to draw a new card?";
  console.log(message);
} else if (sum === 21) {
  message = "Wohoo! You've got Blackjack!";
  console.log(message);
  hasBlackJack = true;
} else {
  message = "You're out of the game!";
  console.log(message);
  isAlive = false;
}

console.log(hasBlackJack);
console.log(isAlive);
console.log(message);

// ------------------------------

console.log(4 === 3); // false
console.log(5 > 2); // true
console.log(12 > 12); // false
console.log(3 < 0); // false
console.log(3 >= 3); // true
console.log(11 <= 11); // true
console.log(3 <= 2); //false
