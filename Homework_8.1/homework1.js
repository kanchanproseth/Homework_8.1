
document.getElementById('start').innerHTML = "Start at: 00 :00 :00";
document.getElementById('stop').innerHTML = "Stop at: 00 :00 :00";
document.getElementById('time').innerHTML = "----Minutes ----secs";
document.getElementById('money').innerHTML = "-----Reals";
btn = document.getElementById("btn");
function toStart() {
    timestart = new Date();
    tStart=timestart.getTime();
    h1 = timestart.getHours();
    m1 = timestart.getMinutes();
    s1 = timestart.getSeconds();
    document.getElementById("btn").value = "Stop";
    document.getElementById('start').innerHTML = "Start at: " + h1 + ": " + m1 + ": " + s1;
    document.getElementById("btn").setAttribute('onclick', 'toStop()')
}
function toStop() {
    var money;
    var moneyh;
    var moneym;
    timestop = new Date();
    tStop=timestop.getTime();
    h2 = timestop.getHours();
    m2 = timestop.getMinutes();
    s2 = timestop.getSeconds();
	time = (tStop-tStart)*0.001/60;
    times=Math.floor(time*60);
    document.getElementById("btn").value = "Clear";
    document.getElementById('time').innerHTML = Math.floor(time) + " Minutes "+times+"secs";
    document.getElementById('stop').innerHTML = "Stop at: " + h2 + ": " + m2 + ": " + s2;
    if (Math.floor(time / 60) >= 1) {
        moneyh = Math.floor(time / 60) * 1500;
        if (Math.floor(time % 60) > 30) {
            moneym = 1500;
        }
        else if (Math.floor(time % 60) > 15) {
            moneym = 700;
        }
        else if (Math.floor(time % 60) > 0) {
            moneym = 500;
        }
        else {
            moneym = 0;
        }
        money = moneyh + moneym;
    } else {
        if (Math.floor(time % 60) > 30) {
            moneym = 1500;
        }
        else if (Math.floor(time % 60) > 15) {
            moneym = 700;
        }
        else if (Math.floor(time % 60) > 0) {
            moneym = 500;
        }
        else {
            moneym = 0;
        }
        money = moneym;
    }
    document.getElementById('money').innerHTML = money + " Reals";
    document.getElementById("btn").setAttribute('onclick', 'toClear()')
    name=document.getElementById("myname");
    document.getElementById("myname").innerHTML="<div id='myname' style='display:inline-block;margin-left: 15%;text-align: center;padding-top: 2%;font-size: 25pt;width: 70%;height: 75px;background-color: black;color: white;'>Kan Chanproseth</div>";
}
function toClear() {
    document.getElementById('start').innerHTML = "Start at: 00 :00 :00";
    document.getElementById('stop').innerHTML = "Stop at: 00 :00 :00";
    document.getElementById('time').innerHTML = "----Minutes ----secs";
    document.getElementById('money').innerHTML = "----Reals";
    document.getElementById("btn").value = "Start";
    document.getElementById("btn").setAttribute('onclick', 'toStart()')
    document.getElementById("myname").innerHTML="<div id='myname'></div>";
}