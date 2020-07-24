// define global variables
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var moodyScore = 0;
var festiveScore = 0;
var homeyScore = 0;
var modernScore = 0;

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


//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", resultMoody);



// Define quiz functions here
function resultMoody(){
  moodyScore++;
  questionCount++;
  if()
}

function resultFestive(){
  festiveScore++;
  questionCount++;
}

function resultModern(){
  modernScore++;
  questionCount++;
}

function resultHomey(){
  homeyScore++;
  questionCount++;
}