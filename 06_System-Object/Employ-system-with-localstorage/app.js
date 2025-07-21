// input box 1 
let inputBox = document.querySelector(".input-box-1")
let input1 = inputBox.firstElementChild


let input2 = inputBox.firstElementChild.nextElementSibling
let input3 = inputBox.lastElementChild


function addEmploy() {
    let input1Value = input1.value
    let input2Value = input2.value
    let input3Value = input3.value
    if (input1Value != "" && input2Value != "" && input3Value != "") {

        let inputData = JSON.parse(localStorage.getItem("storeData")) ?? []

        // check id is exist 

        let exist = inputData.some((emp) => emp.inputId == input1Value)

        if (exist) {
            input1.value = ""
            input1.focus()
            alert("❌ This Id is Already Exist. Please Enter Unique ID.")
            return // stop this function
        }

        // check id is exist

        inputData.push({
            inputId: input1Value,
            inputName: input2Value,
            inputRole: input3Value
        })
        localStorage.setItem("storeData", JSON.stringify(inputData))

        input1.value = ""
        input2.value = ""
        input3.value = ""
        input1.focus()
        showData()

    } else alert("Fill Input Field")
}




let dataDiv = document.querySelector(".data-div")
function showData() {
    dataDiv.innerHTML = ""
    let inputData = JSON.parse(localStorage.getItem("storeData")) ?? []

    inputData.forEach((element, index) => {
        dataDiv.innerHTML += `<ul>
        <span onclick="removeItem(${index})">&times;</span>
                    <li>id : ${element.inputId}</li>
                    <li>Name : ${element.inputName}</li>
                    <li>Role : ${element.inputRole}</li>
                </ul>`
    })
}
showData()


function removeAll() {
    localStorage.clear("storeData")
    input1.focus()
    showData()
}

function removeItem(id) {
    let inputData = JSON.parse(localStorage.getItem("storeData")) || "No Data"
    inputData.splice(id, 1)
    localStorage.setItem("storeData", JSON.stringify(inputData))
    showData()
}


// get employ 
let getInput2 = document.querySelector(".input-box-2 input")
let printData = document.querySelector(".print-data");
function getData() {
    let inputData = JSON.parse(localStorage.getItem("storeData")) || "No Data"
    inputData.forEach((element, index) => {
        if (element.inputId == getInput2.value) {
            printData.innerHTML += `<ul>
                    <li>id : ${element.inputId}</li>
                    <li>Name : ${element.inputName}</li>
                    <li>Role : ${element.inputRole}</li>
                </ul>`
        }
    })
    getInput2.value = ""
    getInput2.focus()
}

// total emp

function totalEmp() {
        let inputData = JSON.parse(localStorage.getItem("storeData")) || ""
        let getBox3 = document.querySelector(".box-3 p")
        getBox3.style.display = "block"
        getBox3.style.transition = "all 1s linear"
        getBox3.textContent = `Total Employs is ${inputData.length}`
}