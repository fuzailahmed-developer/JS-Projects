const tableBody = document.querySelector("#table-body")

function apiCall() {
    fetch(`https://dummyjson.com/users`)
        .then((res) => res.json())
        .then((data) => renderData(data))
        .catch((err) => console.log("Error", err))
}
apiCall()

function renderData(data) {
    data.users.map((user) => {
        let id = new Date().getTime() + Math.random() * 3
        let userAddress = user.address.address;
        if (userAddress.length > 10) {
            let createTr = document.createElement("tr")
            let createTd1 = document.createElement("td")
            let createTd2 = document.createElement("td")

            createTd1.textContent = "Address"
            let createBtn = document.createElement("button")
            createBtn.setAttribute("id", `${id}`)
            createBtn.setAttribute("onclick", `hideShow('${userAddress}','${id}')`)
            createBtn.textContent = "Show Data"


            let createWrapper = document.createElement("span")
            createWrapper.textContent = userAddress.slice(0, 10) + "....."


            createTd2.append(createWrapper, createBtn)

            createTr.append(createTd1, createTd2)

            tableBody.append(createTr)

        } else {
            let createTr = document.createElement("tr")
            let createTd1 = document.createElement("td")
            let createTd2 = document.createElement("td")
            createTd1.textContent = "Address"
            createTd2.textContent = `${userAddress}`
            createTr.append(createTd1,createTd2)
            tableBody.append(createTr)
        }

    }).join(" ")
}

function hideShow(data, id) {

    let getBtn = document.getElementById(id)
    if (getBtn.textContent == "Show Data") {
        getBtn.innerHTML = "Hide Data";
        getBtn.previousElementSibling.textContent = data
    }
    else {
        getBtn.innerHTML = "Show Data";
        getBtn.previousElementSibling.textContent = data.slice(0, 10) + "....";
    }

}