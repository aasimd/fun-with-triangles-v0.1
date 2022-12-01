var baseSide = document.querySelector("#base-value");
var heightSide = document.querySelector("#height-value");
var calculateBtn = document.querySelector("#calculate-button");
var areaOutput = document.querySelector("#area-output");


function getArea (){
    var area = 0.5 * Number(baseSide.value) * Number(heightSide.value);
    areaOutput.innerText = "The Area of the Triangle is " + area + "sq units"
}


calculateBtn.addEventListener("click" , getArea)