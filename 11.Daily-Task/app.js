let getAllInput = document.querySelectorAll(".input-fields input")
let getIcon = document.querySelectorAll(".icon")
let errorMessage = document.querySelector(".error-message p")
let count = 0
getIcon.forEach((currEle, index) => {
    currEle.addEventListener("click", (e) => {
        let checkFields = [...getAllInput].every((input) => input.value == "")
        if (!checkFields) {
            currEle.nextElementSibling.classList.toggle("line-through")
            currEle.firstElementChild.classList.toggle("img")
            if (count == 3) {
                count = 0
            }
            count++
        }
        else errorMessage.style.display = "block"

    })
})


