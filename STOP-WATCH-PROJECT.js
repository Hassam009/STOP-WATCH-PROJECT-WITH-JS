const countDownElement=document.getElementById("countDown")
const resetValueElement=document.querySelector(".resetValue")


document
.querySelector(".start-btn")
.addEventListener("click", startTimer);

let startCount=0;

const startTimer=()=>{
    setInterval(()=>{
        countDownElement.innerText=startCount++;
    },1000)
}


// document
// .querySelector(".reset-btn")
// .addEventListener("click", resetTimer);
// document
// .querySelector(".stop-btn")
// .addEventListener("click", stopTimer);
// document
// .querySelector(".stop-btn")
// .addEventListener("click", stopTimer);

// document
// .querySelector(".time-btn")
// .addEventListener("click", showStopValue);


// document
// .querySelector(".clear-btn")
// .addEventListener("click", clearTimeValue)