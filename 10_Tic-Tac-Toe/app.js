const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let flag = true;
let count = 0

let buttons = document.querySelectorAll("button")
buttons.forEach((currEle, index) => {
    currEle.addEventListener("click", (e) => {
        count++
        if (flag) {
            currEle.innerText = "O"
            flag = false;
        } else {
            currEle.innerText = "X"
            flag = true
        }
        if (count == 9) {

            setTimeout(() => {
                for (const element of buttons) {
                    element.innerHTML = ""
                    element.disabled = false
                }
                alert("Match Draw!")
            }, 200);

            count = 0
        }
        currEle.disabled = true
        checkWinner()
    })


})


function checkWinner() {
    for (const element of winPatterns) {

        let value0 = buttons[element[0]].innerText
        let value1 = buttons[element[1]].innerText
        let value2 = buttons[element[2]].innerText

        if (value0 != "" && value1 != "" && value2 != "") {

            if (value0 == value1 && value1 == value2) {
                count = 0
                setTimeout(() => {
                    alert(`${value0} is Winner`)
                    clearBox()
                }, 200);
            }
            
        }
        
    }
}

function clearBox() {
    for (const element of buttons) {
        element.innerHTML = ""
        element.disabled = false
    }
}