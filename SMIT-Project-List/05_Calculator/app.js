let getBtn = document.querySelectorAll("button")
let getInput = document.querySelector("input")
let numberInputs = document.querySelectorAll('.number')

function number(num) {
    let value = num
    getInput.value += value
}

function count(c) {
    if (getInput.value.trim() != "") {
        getInput.value = eval(getInput.value)
    }
}
function opt(o) {
    if (getInput.value.trim() != "") {
        let operator = o;
       switch (true) {
        case getInput.value.at(-1) == "+":
            break;
        case getInput.value.at(-1) == "-":
            break;
        case getInput.value.at(-1) == "*":
            break;
        case getInput.value.at(-1) == "/":
            break;
        case getInput.value.at(-1) == "%":
            break;
       
        default:
            getInput.value += operator
            break;
       }
    }
}
function clearAll() {
    getInput.value = ""
    getInput.focus()
}
function del() {
    getInput.value = getInput.value.slice(0, -1)

}