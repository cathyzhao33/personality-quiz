// define global variables
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var moodyScore = 0;
var festiveScore = 0;
var homeyScore = 0;
var modernScore = 0;
var moodyScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var result = document.getElementById("result");


//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", resultMoody);
q1a2.addEventListener("click", resultFestive);
q1a3.addEventListener("click", resultHomey);
q1a4.addEventListener("click", resultModern);

q2a1.addEventListener("click", resultFestive);
q2a2.addEventListener("click", resultModern);
q2a3.addEventListener("click", resultMoody);
q2a4.addEventListener("click", resultHomey);

q3a1.addEventListener("click", resultHomey);
q3a2.addEventListener("click", resultMoody);
q3a3.addEventListener("click", resultModern);
q3a4.addEventListener("click", resultFestive);



// Define quiz functions here
function resultMoody() {
  moodyScore++;
  questionCount++;
  // alert("moody+1");
  
  if (questionCount >= 3) {
    updateResult();
  }
}

function resultFestive() {
  festiveScore++;
  questionCount++;
  // alert("festive+1");
  
  if (questionCount >= 3) {
    updateResult();
  }
}

function resultModern() {
  modernScore++;
  questionCount++;
  // alert("modern+1");
  
  if (questionCount >= 3) {
    updateResult();
  }
}

function resultHomey() {
  homeyScore++;
  questionCount++;
  // alert("homey+1");
  
  if (questionCount >= 3) {
    updateResult();
  }
}

function updateResult() {
  if (moodyScore >= 2) {
    result.innerHTML = "Moody and Mysterious";
    result.innerHTML = <img src="https://cdn.glitch.com/532a55e3-82b4-48f3-8769-7b4aeab731c4%2Fmoody%20(1).jpg?v=1595479791523" width="400px" height="150px">";
  }
  else if (homeyScore >= 2) {
    result.innerHTML = "Comfortable and Homey";
  }
  else if (festiveScore >= 2) {
    result.innerHTML = "Fun and Festive";
  }
  else if (modernScore >= 2) {
    result.innerHTML = "Modern and Elegant";
  }
  else {
    result.innerHTML = "Result inconclusive. You're an interesting one..."
  }
}