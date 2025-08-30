//! traffic light 
var btnLight = document.getElementById("btn-Traffic-light");
var Light = document.getElementsByClassName("circle")
var flag = 0
function lightChanging() {
    if (flag == 0) {
        Light[2].style.backgroundColor = "transparent";
        Light[0].style.backgroundColor = "red"
        btnLight.innerHTML = "STOP"
        btnLight.style.color = "white"
        btnLight.style.backgroundColor = "red"
        flag = 1;
    }
    else if (flag == 1) {
        Light[0].style.backgroundColor = "transparent";
        Light[1].style.backgroundColor = "orange";
        btnLight.innerHTML = "Get Ready"
        btnLight.style.color = "white"
        btnLight.style.backgroundColor = "orange"
        flag = 2;
    } 
    else {
        Light[1].style.backgroundColor = "transparent";
        Light[2].style.backgroundColor = "rgb(3, 255, 3)";
        btnLight.innerHTML = "GO!"
        btnLight.style.color = "white"
        btnLight.style.backgroundColor = "rgb(3, 255, 3)"
        flag = 0;
    }
}