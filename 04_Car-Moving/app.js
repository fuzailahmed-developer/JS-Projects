var mainEl = document.querySelectorAll(".elem")
var elImg = document.querySelector("#elImg")

for (const element of mainEl) {
    console.log(element);

    element.addEventListener("mouseenter",function(){
        // console.log("Entered");
        element.childNodes[3].style.opacity = "1"
        element.childNodes[3].style.transition = "all 0.3s ease"
    })

    element.addEventListener("mouseout",function(){
        element.childNodes[3].style.opacity = "0"
        element.childNodes[3].style.transition = "all 0.3s ease"
    })

    element.addEventListener("mousemove",function(defer){
        element.childNodes[3].style.opacity = "1"
        element.childNodes[3].style.transition = "unset"
        element.childNodes[3].style.left = defer.x+"px"
    })
}
