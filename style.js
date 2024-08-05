const hourEl = document.getElementById("hours")
const minuteEl = document.getElementById("min")
const secondEl = document.getElementById("sec")
const ampmEl = document.getElementById("am")

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"
    //let ampm = new Date().getHours() >= 12? "PM" : "AM"
    if (h>=12){
        h= h-12
        ampm = "PM"
    }
    h= h<10? "0"+h:h;
    m= m<10? "0"+m:m;
    s= s<10? "0"+s:s;

    hourEl.innerHTML = h
    minuteEl.innerHTML = m
    secondEl.innerHTML = s
    ampmEl.innerHTML = ampm
    //ampmEl.innerHTML = ampm

}

setInterval(updateClock, 1000)