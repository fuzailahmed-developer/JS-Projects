var getBtn1Id = document.getElementById("btn-1")
var getPId = document.getElementById("p-id");

function friends() {
    if (getBtn1Id.innerHTML == "Add Friend") {
        getPId.innerHTML = " ✅ You and Fuzail are now friends !"
        getBtn1Id.innerHTML = "Remove"
        getBtn1Id.style.backgroundColor = "#EA2F14";
        getBtn1Id.style.boxShadow = "rgba(218, 5, 5, 0.267) 0px 1px 3px 0px, rgba(224, 16, 16, 0.212) 0px 0px 0px 1px"
    } else {
        getPId.innerHTML = "❌ You are not friends with Fuzail !"
        getBtn1Id.innerHTML = "Add Friend"
        getBtn1Id.style.backgroundColor = "#4300FF";
        getBtn1Id.style.boxShadow = "rgba(6, 107, 207, 0.267) 0px 1px 3px 0px, rgba(16, 120, 224, 0.212) 0px 0px 0px 1px"
        
    }
}