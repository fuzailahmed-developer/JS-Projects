let userBidAmount = {
    currBalance: 1000,
};
// convert to stringify and local store
localStorage.setItem("balance", JSON.stringify(userBidAmount));

let userBalance = document.querySelector(".user-balance")
let currentData = JSON.parse(localStorage.getItem("balance"));
userBalance.innerHTML = "Current Balance : " + currentData.currBalance


let userInputBidAmount = document.querySelector("#bid-amount")
let userInputNumAmount = document.querySelector("#bid-number")
let errorBox = document.querySelector(".Error-Box")

function startBid() {
    if (userInputBidAmount.value <= currentData.currBalance && userInputBidAmount.value != 0) {
        if (userInputNumAmount.value > 0 && userInputNumAmount.value <= 6) {

            let randomNum = random();
            let yourNum = Number(userInputNumAmount.value)
            let bidAmount = Number(userInputBidAmount.value)

            console.log("Generated Num : " + randomNum);
            console.log("Your Number : " + yourNum);

            if (randomNum == yourNum) {
                errorBox.innerHTML = "Congrats You Are Win ✅"
                currentData.currBalance += bidAmount
                localStorage.setItem("balance",JSON.stringify(currentData))
                userBalance.innerHTML = "Current Balance : " + currentData.currBalance
            } else {
                currentData.currBalance -= bidAmount
                localStorage.setItem("balance",JSON.stringify(currentData))
                errorBox.innerHTML = "You Are Lose RS. " + bidAmount + " ❌"
                userBalance.innerHTML = "Current Balance : " + currentData.currBalance
            }

        } else {
            errorBox.innerHTML = "Enter Number Between 1 to 6"
        }
    }

    else {
        errorBox.innerHTML = "Balance Required"
    }

    clearInput();
}

function random() {
    let generateNum = Math.ceil(Math.random() * 6);
    return generateNum
}

function clearInput() {
    if (userInputBidAmount.value != "" && userInputNumAmount.value != "") {
        userInputBidAmount.value = ""
        userInputNumAmount.value = ""
        userInputBidAmount.focus();
    }
}
