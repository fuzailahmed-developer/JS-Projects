var getBox = document.querySelector(".box")
var getI = document.querySelector("i")
// console.log(getBox);

getBox.addEventListener("dblclick",function(){
    getI.style.opacity = "0.8"
    setTimeout(function(){
        getI.style.opacity = "0"
    },700)
})