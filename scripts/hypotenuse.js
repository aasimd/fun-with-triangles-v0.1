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
    var hypotenuse2 = hypotenuse.toFixed(2)
    hypotenuseOutput.innerText = "By using the Hypotenuse theorem, the hypotenuse is " + hypotenuse2 + " units"
}

calculateBtn.addEventListener("click",getHypotenuse)