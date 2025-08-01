
let getBtn = document.querySelector(".top")
const container = document.querySelector(".container");
let bottomBox = document.querySelector(".bottom div")



let color1 = "#051937"
let color2 = "#008793"

getBtn.firstElementChild.innerHTML = `${color1}`;
getBtn.lastElementChild.innerHTML = `${color2}`;

bottomBox.innerHTML = `linear-gradient(to right,${color1},${color2})`

show(`linear-gradient(to right,${color1},${color2})`);

function show(data) {
    container.style.background = data
}


[...getBtn.children].forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let randomSixDigit = Math.floor(100000 + Math.random() * 900000);
        if (index == 0) {
            color1 = `#${randomSixDigit}`
            getBtn.firstElementChild.innerHTML = `${color1}`;
        }
        else {
            color2 = `#${randomSixDigit}`
            getBtn.lastElementChild.innerHTML = `${color2}`;
        }
        container.style.background = `linear-gradient(to right,${color1},${color2})`

        bottomBox.innerHTML = `linear-gradient(to right,${color1},${color2})`
        
    })
})







































// for (const element of getBtn.children) {
//     element.addEventListener("click",()=>{

//         let randomSixDigit1 = Math.floor(100000 + Math.random() * 900000);
//         let randomSixDigit2 = Math.floor(100000 + Math.random() * 900000);
//         container.style.background = `linear-gradient(to right,#${randomSixDigit1},#${randomSixDigit2})`

//         getBtn.firstElementChild.innerHTML = `#${randomSixDigit1}`
//         getBtn.lastElementChild.innerHTML = `#${randomSixDigit2}`

//         show(`linear-gradient(to right,#${randomSixDigit1},#${randomSixDigit2})`)
//     })
// }

// const show = (data) => {
//     bottomBox.innerHTML = data
// }
// show(`linear-gradient(to right,#051937,#008793)`)

