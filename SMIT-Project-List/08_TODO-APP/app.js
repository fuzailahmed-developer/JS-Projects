let getInput = document.querySelector(".input-box input")

// store data 

function addItem() {

    if (getInput.value != "") {
        let listValue = getInput.value;

        let listData = JSON.parse(localStorage.getItem("list")) ?? []
        listData.push({
            "list": listValue
        })
        localStorage.setItem("list", JSON.stringify(listData))

        getInput.value = ""
        getInput.focus()

        showData()
    }
    else{
        alert("Add Item")
    }
}

// show data 
let getUl = document.querySelector("ul")
let inDiv = document.querySelector(".remove-all-btn button")
function showData() {
    getUl.innerHTML = ""
    let listData = JSON.parse(localStorage.getItem("list")) ?? []
    listData.forEach((element, index) => {
        getUl.innerHTML += `<li>${element.list} <div class="li-container"><span onclick="removeItem(${index})">&times;</span> <span onclick="edit(${index})">&#9998;</span></div></li>`
    });
    if (getUl.innerHTML != "") {
        inDiv.style.display = "block"
    }
}
showData()


// Remove All

function removeAll() {
    localStorage.clear("list")
    inDiv.style.display = "none"
    getInput.focus()
    showData()
}


// remove item

function removeItem(id){
    let listData = JSON.parse(localStorage.getItem("list"))
    listData.splice(id,1)
    localStorage.setItem("list", JSON.stringify(listData))
    inDiv.style.display = "none"
    showData()
}

// edit data

function edit(id) {
    let listData = JSON.parse(localStorage.getItem("list"))
    getInput.value = listData[id].list
    getInput.focus()
    removeItem()
}