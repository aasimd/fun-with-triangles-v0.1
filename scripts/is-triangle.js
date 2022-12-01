var inputAngles = document.querySelectorAll(".angle-inputs");
var button = document.querySelector("#is-triangle-btn");
var output = document.querySelector("#output-box");


function getSumOfAngles (angle1, angle2, angle3) {
    var sumOfAngles = angle1 + angle2 + angle3 ;
    return sumOfAngles
}
function clickHandler () {
    var totalSumOfAngles = (getSumOfAngles (Number(inputAngles[0].value), Number(inputAngles[1].value), Number(inputAngles[2].value)))
    if (totalSumOfAngles===180){
        output.innerText = "YAY! your angles do form a triangle 🤩";
    } else {
        output.innerText = "oh no! your angles don't form a triangle 😥";
    }
}

button.addEventListener("click" , clickHandler)