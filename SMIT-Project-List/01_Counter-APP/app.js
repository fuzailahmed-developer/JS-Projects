let liveVal = document.querySelector(".number h1")
let btns = document.querySelectorAll(".btns button")
let selectVal = document.querySelector(".userVal")
let increment;
let count = 0

function autoCall() {
    selectVal.addEventListener("change", (e) => {
        increment = e.target.value
    })
}


function controlClick() {

    autoCall()

    btns[0].addEventListener("click", () => {

        if (!increment) {
            count++
            liveVal.textContent = count
            liveVal.style.color = "black"
        }
        else {
            count += Number(increment)
            liveVal.textContent = count
            liveVal.style.color = "black"
        }
    })

    btns[1].addEventListener("click", () => {

        if (count > Number(increment) || count == Number(increment)) {
            autoCall()
            count -= Number(increment)
            liveVal.textContent = count
        }
        else if (Number(increment) > count) {
            alert(`Selected Number is Greater Then Count!`)
            liveVal.style.color = "red"
        }
        else if(count > 0){
            count--
            liveVal.textContent = count
        }
    })
}

controlClick()

let restVal = () => {
    count = 0
    liveVal.textContent = count
}