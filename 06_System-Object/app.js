let employees = [
  { id: 1, name: "Ali Khan", role: "Frontend Developer" },
  { id: 2, name: "Sara Ahmed", role: "Backend Developer" },
  { id: 3, name: "Usman Tariq", role: "Full Stack Developer" },
  { id: 4, name: "Ayesha Noor", role: "UI/UX Designer" },
  { id: 5, name: "Hamza Ali", role: "Project Manager" },
  { id: 6, name: "Nimra Fatima", role: "QA Engineer" },
  { id: 7, name: "Bilal Raza", role: "DevOps Engineer" },
  { id: 8, name: "Zara Shah", role: "Product Owner" },
  { id: 9, name: "Ahmad Sheikh", role: "Mobile Developer" },
  { id: 10, name: "Hira Zaman", role: "Technical Writer" }
];


//! Get Employ Box - 1 Start  

function getEmploy() {
  let userInput1 = document.getElementById("input-one")
  if (userInput1.value != "") {

    for (var i = 0; i < employees.length; i++) {

      if (employees[i].id == userInput1.value) {

        let contentContainer = document.querySelector(".content-container-1")
        let ulEl = document.createElement("ul")
        contentContainer.append(ulEl)
        ulEl.setAttribute("class", "ul-styling")

        let liIdEl = document.createElement("li")
        liIdEl.textContent = "Id : " + employees[i].id

        let liNameEl = document.createElement("li")
        liNameEl.textContent = "Name : " + employees[i].name

        let liRoleEl = document.createElement("li")
        liRoleEl.textContent = "Role : " + employees[i].role

        ulEl.append(liIdEl, liNameEl, liRoleEl)

        let removeAllBtn = document.querySelector("#Remove-All")
        removeAllBtn.style.display = "block"
        removeAllBtn.setAttribute("onclick", `removeAll()`)

        userInput1.value = ""
        userInput1.focus()

      }

    }

  }
  else {
    alert("Enter Employ Id")
  }
}

function removeAll() {
  let contentContainer = document.querySelector(".content-container-1")
  contentContainer.innerHTML = ""
  let removeAllBtn = document.querySelector("#Remove-All")
  removeAllBtn.style.display = "none"

}

//! Get Employ Box - 1 End


// ! Add Employ Box - 2 Start 

function addEmploy() {

  let EmployInputId = document.getElementById("add-id")
  let EmployInputName = document.getElementById("add-name")
  let EmployInputRole = document.getElementById("add-role")
  if ((EmployInputId.value != "") && (EmployInputName !== "") && (EmployInputRole !== "")) {

    let NewEmp = {
      id: Number(EmployInputId.value),
      name: EmployInputName.value,
      role: EmployInputRole.value
    }

    employees.push(NewEmp)

    console.log("Employee added:", NewEmp);
    console.log("All Employees:", employees);


    EmployInputId.value = ""
    EmployInputName.value = ""
    EmployInputRole.value = ""

    let message = document.querySelector(".div-message")
    message.style.display = "block"

  } else {
    alert("Fill all input field")
  }

}

// ! Add Employ Box - 2 End 


//! Delete Employ  Box- 3 Start ...


function deleteEmploy() {
  let employInput = document.querySelector("#deleteEmployInput");

  if (employInput.value != "") {

    for (var i = 0; i < employees.length; i++) {
      if (employInput.value == employees[i].id) {
        employees.splice(employees[i],1)
        console.log("Updated Data", employees);
        break;
      }
    }

    let message1 = document.querySelector(".div-message1")
    message1.style.display = "block"

    employInput.value = ""

  } else {

    alert("Fill Input Field")

  }

}



//! Delete Employ  Box- 3 End

//! Total Employs Box - 4 Start

function totalEmploys() {
  
    let message2 = document.querySelector(".div-message2");
    message2.style.display = "block"

    let popMessage = document.querySelector(".pop-message");
    popMessage.textContent = "Total Employs is  : " + employees.length
}


//! Total Employs Box - 4 End