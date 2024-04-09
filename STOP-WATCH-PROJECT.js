const countDownElement=document.getElementById("countDown")
const resetValueElement=document.querySelector(".resetValue")


document
.querySelector(".start-btn")
.addEventListener("click", startTimer);
document
.querySelector(".reset-btn")
.addEventListener("click", resetTimer);
document
.querySelector(".stop-btn")
.addEventListener("click", stopTimer);
document
.querySelector(".stop-btn")
.addEventListener("click", stopTimer);

document
.querySelector(".time-btn")
.addEventListener("click", showStopValue);


document
.querySelector(".clear-btn")
.addEventListener("click", clearTimeValue)