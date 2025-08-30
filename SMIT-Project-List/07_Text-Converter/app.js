const textArea1 = document.getElementById("textarea-1")
const textArea2 = document.getElementById("textarea-2")
const convertIcon = document.getElementById("converter-icon")

convertIcon.addEventListener("click", () => {
    if (textArea1.value.trim() != "") {
        convertIcon.classList.toggle("rotate-animation")
        let text = textArea1.value.trim().split(/\s+/)

        let cap = text.map((curr) => {
            return (`${curr[0].toUpperCase()}${curr.slice(1)}`)
        })
        textArea1.value = ""
        textArea2.disabled = false
        textArea2.value = cap.join(" ")
    }
    else alert("Add Text")
})

function clearFields() {
    textArea1.value = ''
    textArea2.value = ''
    textArea1.focus()
}