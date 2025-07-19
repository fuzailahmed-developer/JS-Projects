
// let userData = [
//     {
//         name : "ali",
//         email : "ali@gmail.com"
//     },
//     {
//         name : "fuzail",
//         email : "fuzail@gmail.com"
//     },
// ]

// localStorage.setItem("user",JSON.stringify(userData))

// let getData = JSON.parse(localStorage.getItem("user"));
// console.log(getData[0]);


let form = document.querySelector("form");
let showData = document.querySelector(".show-data-content-div")
form.addEventListener("submit", (e) => {



    let uname = e.target.uname.value
    let uemail = e.target.uemail.value
    let upassword = e.target.upassword.value

    let userDetails = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    userDetails.push({
        "name": uname,
        "email": uemail,
        "password": upassword
    })

    localStorage.setItem("userDetails", JSON.stringify(userDetails))

    displayData()
    e.preventDefault();

})


let displayData = () => {
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));
    let finalData = "";
    userDetails.forEach((element, i) => {
        finalData = finalData + `
            <ul class="items">
                <span onclick="removeItem(${i})">&times;</span>
                <li>name  : ${element.name}</li>
                <li>email  : ${element.email}</li>
                <li>password  : ${element.password}</li>
            </ul>
        `
    });
    showData.innerHTML = finalData;

}
displayData()

// remove all 

function removeItem(i) {
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));
    userDetails.splice(i, 1)
    localStorage.setItem("userDetails", JSON.stringify(userDetails))

    // updated entry 
    displayData()
}

let removeAll = document.querySelector(".remove-all");
removeAll.addEventListener("click", () => {
    localStorage.clear("userDetails")
    displayData()
})

displayData()