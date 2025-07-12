let [seconds,minutes,hours]=[0,0,0];
let displaytime=document.getElementById("displaytime");
let timer=null;


function stopwatch(){
    seconds++;
    if(seconds == 60){
    seconds=0;
    minutes++;
    if(minutes == 60){
        minutes=0;
        hours++;
      }
   }
   let hr =hours < 10 ? "0" + hours : hours;
   let mi =minutes < 10 ? "0" + minutes: minutes;
   let se =seconds < 10 ? "0" + seconds : seconds;
  
   displaytime.innerHTML=hr+":"+mi+":"+se;
}
function watchStart(){
    if(timer!==null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000);
}
function watchstop(){
    clearInterval(timer);
}
function watchreset(){
    clearInterval(timer);
    [seconds,minutes,hours]=[0,0,0];
    displaytime.innerHTML="00:00:00";

}