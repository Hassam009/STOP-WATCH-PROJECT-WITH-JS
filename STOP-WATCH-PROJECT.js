const countDownElement=document.getElementById("countDown")
const resetValueElement=document.querySelector(".resetValue")

let startCount=0;
let intervalId;
const startTimer=()=>{
    intervalId=  setInterval(()=>{
        countDownElement.innerText=startCount++;
    },1000)
}
document
.querySelector(".start-btn")
.addEventListener("click", startTimer);


//NOW WILL GIVE FUNCTIONALITIES TO STOP BUTTON
const stopTimer=()=>{
    clearInterval(intervalId)
}


document
.querySelector(".stop-btn")
.addEventListener("click", stopTimer);

// document
// .querySelector(".reset-btn")
// .addEventListener("click", resetTimer);
// document
// .querySelector(".stop-btn")
// .addEventListener("click", stopTimer);

// document
// .querySelector(".time-btn")
// .addEventListener("click", showStopValue);


// document
// .querySelector(".clear-btn")
// .addEventListener("click", clearTimeValue)