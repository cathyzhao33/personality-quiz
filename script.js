// define global variables
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var moodyScore = 0;
var festiveScore = 0;
var homeyScore = 0;
var modernScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a1 = document.getElementById("q1a1");


//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", result1);



//#TODO: Define quiz functions here
function result1(){
  moodyScore++;
  questionCount++;
}

function result2(){
  result2Score++;
  questionCount++;
}