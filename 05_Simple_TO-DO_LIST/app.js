var getInput = document.getElementById("to-do");
var getUl = document.getElementById("ul-container");

function addItems() {

    var RandomIdGenerator = new Date().getTime() + (Math.random() * 4 + 1);

    var createLiElement = document.createElement("li");
    var createLiElementText = document.createTextNode(getInput.value);
    createLiElement.appendChild(createLiElementText);
    getUl.appendChild(createLiElement);

    var removeBtn = document.createElement("button");
    var removeBtnText = document.createTextNode("Remove");
    removeBtn.appendChild(removeBtnText)

    createLiElement.appendChild(removeBtn)

    createLiElement.setAttribute("onclick",`deleteMessage(${RandomIdGenerator})`)

    createLiElement.setAttribute("id",RandomIdGenerator)

    getInput.focus();
    getInput.value = "";
}

function deleteMessage(id) {
    var RemoveLiElement = document.getElementById(id);
    if (RemoveLiElement) {
        RemoveLiElement.remove();
    }
}