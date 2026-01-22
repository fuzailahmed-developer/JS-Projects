const addEmploy = document.getElementById('addPage')
const EmployList = document.getElementById('listPage')

const employees = [
    { id: 1, name: "Ali", role: "Frontend Developer", salary: 80000 },
    { id: 2, name: "Sara", role: "UI/UX Designer", salary: 75000 },
    { id: 3, name: "Ahmed", role: "Backend Developer", salary: 90000 }
];


// table list

const tableBody = document.getElementById('employeeTable')

function renderList(list) {
    tableBody.innerHTML = list?.map((employ, idx) => (
        `
        <tr>
            <td>${employ?.name}</td>
            <td>${employ?.role}</td>
            <td>${employ?.salary}</td>
                <td>
                    <button class="edit_btn" onclick='editEmploy(${idx},${employ.id})'>edit</button>
                    <button class="delete_btn" onclick='deleteEmploy(${employ.id})'>delete</button>
            </td>
        </tr>
    `
    )).join("")
}

const list = JSON.parse(localStorage.getItem('employs'))
if (!list) {
    localStorage.setItem('employs', JSON.stringify(employees))
    list = JSON.parse(localStorage.getItem('employs'))
}
renderList(list)


const nameEl = document.getElementById('name')
const roleEl = document.getElementById('role')
const salaryEl = document.getElementById('salary')
const form = document.getElementById('employeeForm')


function clearForm() {
    nameEl.value = ''
    roleEl.value = ''
    salaryEl.value = ''
}

function addEmploys() {
    const name = nameEl.value.trim()
    const role = roleEl.value.trim()
    const salary = salaryEl.value.trim()

    const list = JSON.parse(localStorage.getItem('employs'))

    const newEmploy = {
        id: list.length + 1,
        name,
        role,
        salary
    }

    list.push(newEmploy)
    localStorage.setItem('employs', JSON.stringify(list))
    renderList(list)

    checkMenuState(false)
    clearForm()
}


// searching functionality

const searchEl = document.getElementById('search')
searchEl.addEventListener('input', (e) => {
    let searchVal = e.target.value.trim().toLowerCase()
    const filterEmploys = list?.filter((emp) => emp.name.toLowerCase().includes(searchVal))
    renderList(filterEmploys)
})

// delete functionality

function deleteEmploy(id) {
    const list = JSON.parse(localStorage.getItem('employs'))
    const filter = list?.filter((emp) => emp.id != id)
    localStorage.setItem('employs', JSON.stringify(filter))


    const newList = JSON.parse(localStorage.getItem('employs'))
    renderList(newList)

}


// edit functionality

const btn = document.getElementById('btn')

function editEmploy(index, id) {
    const list = JSON.parse(localStorage.getItem("employs")) || [];
    const emp = list.slice(index, index + 1)

    checkMenuState(true)
    btn.removeAttribute('onclick')
    btn.setAttribute('onclick', `updateEmp(${index},${id})`)

    nameEl.value = emp[0].name
    roleEl.value = emp[0].role
    salaryEl.value = emp[0].salary
    btn.innerHTML = 'Edit Employ'

}



function updateEmp(index, id) {
    const list = JSON.parse(localStorage.getItem("employs")) || [];
    const newEmp = {
        id,
        name: nameEl.value,
        role: roleEl.value,
        salary: salaryEl.value
    }

    list.splice(index, 1, newEmp)
    btn.removeAttribute('onclick')
    btn.setAttribute('onclick', 'addEmploys()')
    btn.innerHTML = 'Save Employee'
    clearForm()

    localStorage.setItem('employs', JSON.stringify(list))
    renderList(list)
    checkMenuState(false)
}


// menu functionality

function checkMenuState(param) {
    if (param) {
        EmployList.style.display = 'none'
        addEmploy.style.display = 'block'
        btn.removeAttribute('onclick')
        btn.setAttribute('onclick', 'addEmploys()')
        btn.innerHTML = 'Save Employee'
        clearForm()
    } else {
        addEmploy.style.display = 'none'
        EmployList.style.display = 'block'
    }
}

checkMenuState(true)


// handle menu functionality

let sideBar = document.querySelector('.side_bar')
console.log(sideBar)
function menuOpen(isMenuOpen) {
    if (isMenuOpen) {
        sideBar.style.opacity = 1
        sideBar.style.scale = 1
        sideBar.style.zIndex = 999
    } else {
        sideBar.style.opacity = 0
        sideBar.style.scale = 0.9
        sideBar.removeAttribute('style')
    }
}