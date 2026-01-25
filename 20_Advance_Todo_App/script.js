const allQuotes = [
  'Raise the bar by completing your goals!',
  'Well begun is half done!',
  'Just a step away, keep going!',
  'WoW! You just completed all the goals, time for chill',
]


const goalInputs = document.querySelectorAll('.goal-input')
const checkboxList = document.querySelectorAll('.custom-checkbox')
const progress = document.querySelector('.progress')
const error = document.querySelector('.error-label')
const progressBarText = document.querySelector('.progress_bar_text span')
const progressLabel = document.querySelector('.progress_label')


let allGoals = JSON.parse(localStorage.getItem('allGoals')) || {}
let completedGoalsCount = Object.values(allGoals).filter((goal) => goal.completed).length
progress.style.width = `${completedGoalsCount / 3 * 100}%`
progressBarText.innerHTML = completedGoalsCount
progressLabel.innerHTML = allQuotes[completedGoalsCount]


checkboxList.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
        const allInputsFields = [...goalInputs].every((input) => input.value)
        if (allInputsFields) {
            const inputId = checkbox.nextElementSibling
            allGoals[inputId.id].completed = !allGoals[inputId.id].completed
            if (allGoals[inputId.id].completed) checkbox.style.backgroundColor = '#48A300'
            else checkbox.style.backgroundColor = 'white'
            inputId.classList.toggle('completed')
            localStorage.setItem('allGoals', JSON.stringify(allGoals))
            completedGoalsCount = Object.values(allGoals).filter((goal) => goal.completed).length
            progress.style.width = `${completedGoalsCount / 3 * 100}%`
            progressBarText.innerHTML = completedGoalsCount
            progressLabel.innerHTML = allQuotes[completedGoalsCount]
        } else {
            error.style.opacity = 1
        }
    })
})

goalInputs.forEach((input) => {

    input.value = allGoals[input.id]?.name || ""

    input.addEventListener('focus', () => {
        error.style.opacity = 0
    })

    if (allGoals[input.id]?.completed) {
        input.classList.add('completed')
        input.previousElementSibling.style.backgroundColor = '#48A300'
    }

    input.addEventListener('input', (e) => {
        if (allGoals[input.id]?.completed) {
            e.target.value = allGoals[input.id].name
            return
        }
        allGoals[input.id] = {
            name: input.value,
            completed: false
        }
        localStorage.setItem('allGoals', JSON.stringify(allGoals))
    })

})