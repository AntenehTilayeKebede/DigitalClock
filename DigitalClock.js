window.addEventListener('load',calculateTime)
function calculateTime(){
   var date=new Date();
    var dayNumber=date.getDay();
    var hour=date.getHours();
    var minute=date.getMinutes();
    var second=date.getSeconds();
    var ampm=hour>=12 ? 'PM' :'AM';
    var dayNames=["SUN","MON","TUE","WED","THU","FRI","SAT"];
    hour=hour%12;
    hour=hour ? 12:'12';
    hour=hour<10 ? '0' +hour:hour;
    minute=minute<10 ? '0'+minute:minute;
    second=second<10 ? '0'+second:second;

    document.getElementById("day").innerText=dayNames[dayNumber];
    document.getElementById("hour").innerText=hour;
    document.getElementById("minute").innerText=minute;
    document.getElementById("second").innerText=second;

    document.getElementById("ampm").innerText=ampm;
    setTimeout(calculateTime,200); 
}
