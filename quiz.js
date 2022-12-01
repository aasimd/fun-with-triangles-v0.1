var quizAnswers = document.querySelector(".quiz-answers");
var enterButton = document.querySelector("#enter-btn");
var scoreResults = document.querySelector("#score-box");

const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°",
  ];

function clickHandler(){
    var index = 0;
    var score = 0;
    var formAnswers = new FormData(quizAnswers);
    for (enrty of formAnswers.entries()){
        if (enrty[1] === correctAnswers[index]){
            score = score + 1;
        } index = index + 1;
    } 
    scoreResults.innerText = ("Your FINAL SCORE is " + score + "/" + correctAnswers.length)
}


enterButton.addEventListener("click", clickHandler);
