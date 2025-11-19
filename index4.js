let hasCompletedCourse = true;
let givesCertificate = true;

if (hasCompletedCourse === true && givesCertificate === true) {
  generateCertificate();
}

function generateCertificate() {
  console.log("Generating certificate...");
}

//   ------------------------------------

let haSolvedChallenge = false;
let hasHintsLeft = false;

if (!haSolvedChallenge && !hasHintsLeft) {
  showSolution();
}

function showSolution() {
  console.log("Showing the solution...");
}

//   ------------------------------------

let likesDocumentaries = true;
let likesStartups = false;

if (likesDocumentaries || likesStartups) {
  recommendMovie();
}

function recommendMovie() {
  console.log("Hey, check out this new film we think you will like!");
}
