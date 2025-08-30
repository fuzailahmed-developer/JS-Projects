let getBtn = document.querySelector("button");
let card = document.querySelector(".card");

let flag = false;

getBtn.addEventListener("click", () => {
    if (!flag) {
        card.style.transform = "rotateY(180deg)";
        flag = true;
    } else {
        card.style.transform = "rotateY(0deg)";
        flag = false;
    }
});
