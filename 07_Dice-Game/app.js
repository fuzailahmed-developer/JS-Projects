let imgId = document.getElementById("dice-img");
function roleDice(){
    let randomVal = Math.floor(Math.random() * 6) + 1;
    console.log(randomVal);
    if (randomVal == 1) {
        imgId.src = "./images/dice-1.png"
    }
    else if (randomVal == 2) {
        imgId.src = "./images/dice-2.png"
    } 
    else if (randomVal == 3) {
        imgId.src = "./images/dice-3.png"
    } 
    else if (randomVal == 4) {
        imgId.src = "./images/dice-4.png"
    } 
    else if (randomVal == 5) {
        imgId.src = "./images/dice-5.png"
    } 
    else if (randomVal == 6) {
        imgId.src = "./images/dice-6.png"
    } 
}