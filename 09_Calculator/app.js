
let inputVal = document.querySelector(".input-field input")

function number(num){
    inputVal.value += num
}
function opt(operator){
    let arr = ["+","-","/","*"]
    switch (true) {
        case arr.includes(inputVal.value.at(-1)):
            break;
        case inputVal.value <= 0:
            break;   
        default:
            inputVal.value += operator
            break;
    }
}

function count(){
    if (inputVal.value) {
        inputVal.value = eval(inputVal.value)
    }
}
function clearAll(){
    inputVal.value = ""
    inputVal.focus()
}
function del(){
    inputVal.value = inputVal.value.slice(0,-1)
}