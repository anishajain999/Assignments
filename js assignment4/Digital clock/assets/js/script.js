// console.log("working");

let currentTime = '';
const sound = new Audio('assets/sound/sound.mp3');
sound.loop = true;
let timer;

const formatDay = (index) =>{
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[index]
}

const formatTime = (n) => {
    return n<10 ? `0${n}` : n;
}

const datetime = ()=> {
    const today = new Date();

    // for time
    const hour = formatTime(today.getHours());
    const minute= formatTime(today.getMinutes());
    const  seconds= formatTime(today.getSeconds());
    //console.log(hour,minute,seconds);
    const hours = document.getElementById("hours");
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");
    hours.innerText=`${hour}`;
    min.innerText=`${minute}`;
    sec.innerText=`${seconds}`;

    //For day
    const days = formatDay(today.getDay());
    const months = formatTime(today.getMonth()+1);
    const dates = formatTime(today.getDate());
    const years = today.getFullYear();
    // console.log(day, month,date,year)
    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const date = document.getElementById("date");
    const year = document.getElementById("year");
    day.innerText=`${days}`;
    month.innerText=`${months}`;
    date.innerText=`${dates}`;
    year.innerText=`${years}`;
    const displayedTime = document.getElementById("time");
    displayedTime.innerText = `${hour}:${minute}:${seconds}`;
    currentTime = displayedTime.innerText;
    // console.log(currentTime)
};

const addOptions = (field, range) => {
    const select = document.getElementById(`${field}_alarm`);
    for (i = 0; i < range; i++) {
      select.options[i] = new Option(formatTime(i), i);
    }
  }
  
addOptions("hour", 24);
addOptions("min", 60);
addOptions("sec", 60);


const getAlarmTime = () => {
    const hour = document.getElementById('hour_alarm');
    const minute = document.getElementById('min_alarm');
    const second = document.getElementById('sec_alarm');
    const h = formatTime(hour.options[hour.selectedIndex].value);
    const m = formatTime(minute.options[minute.selectedIndex].value);
    const s = formatTime(second.options[second.selectedIndex].value);
    // console.log(h,m,s)
    return `${h}:${m}:${s}`;
};

const startAlarm = () => {
    // console.log(currentTime);
    // console.log(getAlarmTime());
    document.getElementById('hour_alarm').disabled = true;
    document.getElementById('min_alarm').disabled = true;
    document.getElementById('sec_alarm').disabled = true;
    // const al=document.getElementById('Alarm')

  
    var end = getAlarmTime();
    var start = currentTime;
    var diff = start.split(':').map((item,index) => end.split(':')[index] - item).join(':')
    // console.log(diff)
  
    var a = diff.split(':'); 
    var sec = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
    // console.log(seconds);
    // console.log(typeof(currentTime));
    if(sec>0){
      t = setTimeout(() => {
        if (currentTime === getAlarmTime()) {
          sound.play();
          // console.log("alarm time");    
        }
      }, sec*1000);
      setTimeout(()=>{
        sound.pause();
      },33000);
      // console.log(t);
  }
  else{
    alert("Invalid");
    document.getElementById('hour_alarm').disabled = false;
    document.getElementById('min_alarm').disabled = false;
    document.getElementById('sec_alarm').disabled = false;
  }
    
  
};

const cancelAlarm = () => {
    document.getElementById('hour_alarm').disabled = false;
    document.getElementById('min_alarm').disabled = false;
    document.getElementById('sec_alarm').disabled = false;
    sound.pause();
  };
  
  const ResetAlarm = () => {
    setTimeout(function(){
      window.location.reload(1);
   }, 100);
    // document.getElementById('hour_alarm').value = "00";
    // document.getElementById('min_alarm').value = "00";
    // document.getElementById('sec_alarm').value = "00";
  }

  
document.getElementById("start").addEventListener("click", startAlarm);
document.getElementById("reset").addEventListener("click", ResetAlarm);
document.getElementById("cancel").addEventListener("click", cancelAlarm);


document.addEventListener("DOMContentLoaded",()=>{
    setInterval(datetime,1000);
});