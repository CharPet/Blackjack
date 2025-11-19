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
