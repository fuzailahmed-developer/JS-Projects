var h1El = document.getElementById("h1");
var imgEl = document.getElementById("imgEl");
var btnEl = document.getElementById("Btn");
var wrapperEl = document.getElementById("wrapper-id")
var containerEl = document.getElementById("container-id") 
function bulbOnOff() {
    if (btnEl.innerHTML == "ON BULB") {
        imgEl.src = "./images/pic_bulbon.gif"
        btnEl.innerHTML = "OFF BULB"
        // change heading 
        h1El.innerHTML = "BULB ON"
        // coloring
        wrapperEl.style.backgroundColor = "#ffff0052"
        wrapperEl.style.boxShadow = "rgb(253, 255, 0) 0px 4px 200px"

        // coloring btn 
        btnEl.style.backgroundColor = "#E67E22"
        h1El.style.color = "#E67E22"

        // coloring bg
        containerEl.style.backgroundColor = "#ffff001a";
    } else {
        imgEl.src = "./images/pic_bulboff.gif"
        btnEl.innerHTML = "ON BULB"
        h1El.innerHTML = "BULB OFF"
        // coloring
        wrapperEl.style.backgroundColor = "unset"
        wrapperEl.style.boxShadow = "unset"

        // coloring btn 
        btnEl.style.backgroundColor = "black"
        h1El.style.color = "black"

        // coloring bg
        containerEl.style.backgroundColor = "unset";
    }
}