//globla variable
const time_el =document.querySelector('.watch .timer');
const start_Btn =document.getElementById('start');
const Stop_Btn =document.getElementById('Stop');
const reset_Btn =document.getElementById('Reset');

let seconds =0;
let period =null;


// update the timer or this show the curent time

function timer(){
    seconds++; //this will increment seconds by one
    //formate time
    let hrs =Math.floor(seconds /3600);
    let min =Math.floor((seconds-hrs*3600) /60);
    let secs =seconds %60;

    if(secs <10) secs ='0'+secs;
    if(min<10) min ='0'+min
    if(hrs<10) hrs ='0'+hrs

    time_el.innerText = `${hrs}:${min}:${secs}`;
}

function start(){
    if(period){return}
    period =setInterval(timer,1000);
}
function stop(){
    clearInterval(period);
    const newLocal = period = null;
}
function Reset(){
    stop();
    seconds =0;
    time_el.innerText ='00:00:00';
    set
}

//event listeners
start_Btn.addEventListener('click',start);
Stop_Btn.addEventListener('click',stop);
reset_Btn.addEventListener('click',Reset);