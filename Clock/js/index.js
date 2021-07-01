let clockEl = document.getElementById("clock");

setInterval(updateTime, 1000);

function addZero(x) {
    if (x < 10) {
        x = "0" + x
    }
    return x;
}

function updateTime() {
    let time = new Date()
    let h = time.getHours()
    let m = addZero(time.getMinutes())
    let s = addZero(time.getSeconds())
    let am_pm = "AM"

    if (h > 12) {
        s
        h = h - 12
        am_pm = "PM";
    } else {
        am_pm = "AM"
    }

    clockEl.textContent = addZero(h) + " : " + m + " : " + s + " " + am_pm

}