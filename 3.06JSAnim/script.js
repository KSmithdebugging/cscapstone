var ball = document.querySelector("#basketball");
var p = document.getElementById("#hoopStatus");



var currentMargin = 0;
var animation;

// Functions goes here//


function play() {
    p.innerHTML = "Hooping";
    p.style.color = "orange";
    ball.shape = "circle";
    animation = setInterval(nextFrame, 20);
}
function nextFrame() {
    if (currentMargin < 320) {
        currentMargin++;
        ball.style.top = currentMargin + "px";
        ball.style.left = currentMargin + "px";
    }
    else {
        reset();
    }
}

function reset() {
    p.innerHTML = "Not Hooping";
    p.style.color = "black";
    currentMargin = 0;
    ball.style.margin = "0px";
    clearInterval(animation);
}
document.querySelector("#stop").onclick = reset;
document.querySelector("#play").onclick = play;
