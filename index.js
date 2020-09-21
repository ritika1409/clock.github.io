var date , hours, minute , second , clock,colour;
function clocky(){
    date = new Date();
    hours = date.getHours();
    minute = date.getMinutes();
    second= date.getSeconds();

if (hours <= 9){
    hours = '0' + hours;
}
if (minute<= 9){
   minute = '0' + minute;
}
if (second <= 9){
    second = '0' +second;
}

clock = hours + ":" + minute + ":" + second;
colour= "#" + hours + minute + second;

document.getElementById("clock").innerHTML = clock;
document.body.style.background = colour;


setTimeout(clocky,1000);
}
clocky();