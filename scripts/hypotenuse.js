var baseSide = document.querySelector("#base-value");
var heightSide = document.querySelector("#height-value");
var calculateBtn = document.querySelector("#calculate-button");
var hypotenuseOutput = document.querySelector("#hypotenuse-output");

function sumOfSquares (a,b){
    var sumOfSquares = (a*a) + (b*b);
    return sumOfSquares;
}
function getHypotenuse () {
    var hypotenuse = Math.sqrt(sumOfSquares(Number(baseSide.value) , Number(heightSide.value)));
    hypotenuseOutput.innerText = "By using the Hypotenuse theorem, the hypotenuse is " + hypotenuse + " units"
}

calculateBtn.addEventListener("click",getHypotenuse)