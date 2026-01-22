const nameEl = document.getElementById('name')
const emailEl = document.getElementById('email')
const passwordEl = document.getElementById('password')

function signupUser(){

    const signupUsers = JSON.parse(localStorage.getItem('users')) || []

    const name = nameEl.value.trim().toLowerCase()
    const email = emailEl.value.trim().toLowerCase()
    const password = passwordEl.value.trim().toLowerCase()

    signupUsers.push({name,email,password})

    localStorage.setItem('users',JSON.stringify(signupUsers))

    window.location.href = '../signin_page/index.html'
    alert("Sign Up Successful...!")

}