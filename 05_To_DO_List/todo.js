let userInput = document.getElementById("user-input")
let ulContainer = document.getElementById("ul-container")

function addItems(){
    if (userInput.value.trim() != "") {
        let createLi = document.createElement("li")
    let createLiText = document.createTextNode(userInput.value)
    createLi.appendChild(createLiText)
    ulContainer.appendChild(createLi)

    let editDiv = document.createElement("div");
    createLi.append(editDiv)



    let pencilBtn = document.createElement("i");
    pencilBtn.setAttribute("class","bi bi-pencil")
    editDiv.append(pencilBtn)
    
    let createBtn = document.createElement("i")
    createBtn.setAttribute("class","bi bi-trash")
    editDiv.appendChild(createBtn)

    let RandomID = (new Date().getTime() + Math.random() * 3).toString();
    createLi.setAttribute("id",RandomID)
    
    pencilBtn.setAttribute("onclick",`editText(${RandomID})`)
    createBtn.setAttribute("onclick",`removeItem(${RandomID})`)

    document.getElementById("update-item").innerHTML = "Add Items"

    userInput.value = "";
    userInput.focus();


    } 

    else {
        alert("Please enter a task")
    }
}

function removeItem(id) {
    let removeItem = document.getElementById(id);
    removeItem.remove();
}

function removeAll() {
    ulContainer.innerHTML = ""
}

function editText(id) {
    let editItemId  = document.getElementById(id);
    userInput.value = editItemId.innerText
    editItemId.remove();
    userInput.focus();

    let editTextBtn = document.getElementById("update-item")
    editTextBtn.innerHTML = "Update"
    editItemId.style.fontSize = "12px"

}