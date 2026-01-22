const emailEl = document.getElementById('email')
const passwordEl = document.getElementById('password')

function signinUser(){
    const user = JSON.parse(localStorage.getItem('users'))
    const email = emailEl.value.trim().toLowerCase()
    const password = passwordEl.value.trim().toLowerCase()
    const isSaved = user.some((saved) => saved.password == password && saved.email == email)
    if (isSaved) {
        window.location.href = '../dashboard/index.html'
        alert("Login Successfully...!")
    } else {
        alert("Invalid Password...!")
    }
}