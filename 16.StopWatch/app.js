const btns = document.querySelectorAll(".middle button")
let count = 0;
let timer = document.querySelector(".top p")
let intervalId;
let getTime = document.getElementById("getTime")
btns.forEach((curr, index) => {
    curr.addEventListener(("click"), () => {
        if (index == 0) {
            if (!intervalId) {
                intervalId = setInterval(() => {
                    count++
                    timer.innerHTML = count
                }, 1000);
            }

        }
        if (index == 1) {
            clearInterval(intervalId)
            intervalId = null
        }
        if (index == 2) {
            getTime.innerHTML = ""
        }
        if (index == 3) {
            count = 0;
            timer.innerHTML = count
        }

        if (index == 4) {
            let createLi = document.createElement("li")
            createLi.textContent = `The Stop time is ${count}`
            getTime.append(createLi)
        }

    })
})