const score = document.querySelector('.score')
const localStorageScore = JSON.parse(localStorage.getItem('score')) || 0
score.textContent = `${localStorageScore}/25`


const positivePercentage = document.querySelector('.positive_percentage')
const negativePercentage = document.querySelector('.negative_percentage')


positivePercentage.style.width = `${localStorageScore / 25 * 100}%`
negativePercentage.style.width = `${100 - (localStorageScore / 25 * 100)}%`


function backToHome(){
    window.location.href = '../index.html'
    localStorage.setItem('score',0)
}