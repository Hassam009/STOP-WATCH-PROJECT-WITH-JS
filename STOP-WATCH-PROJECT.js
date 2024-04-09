




const countDownElement=document.getElementById("countDown")
const resetValueElement=document.querySelector(".resetValue")

let startCount=0;
let intervalId; 
const startTimer=()=>{
    intervalId=  setInterval(()=>{
        countDownElement.innerText=startCount++;
    },500)
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

//NOW WILL GIVE FUNCTIONALITIES TO RESET BUTTON
const resetTimer=()=>{
    startCount=0;
    countDownElement.innerText=startCount;
    clearInterval(intervalId)
}
document
.querySelector(".reset-btn")
.addEventListener("click", resetTimer);


//NOW WILL GIVE FUNCTIONALITIES TO SHOW BUTTON
const showStopValue=()=>{
    const newPara=document.createElement("p");
    newPara.innerText=`The Stop Time is ${startCount-1}`
    resetValueElement.append(newPara);
}
document
.querySelector(".time-btn")
.addEventListener("click", showStopValue);
const clearTimeValue=()=>{
  resetValueElement.innerHTML="";
}

document
.querySelector(".clear-btn")
.addEventListener("click", clearTimeValue)