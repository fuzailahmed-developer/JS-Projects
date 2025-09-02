
const container = document.querySelector(".container");
const btns = document.querySelectorAll(".menu-lists button")
let userData;
function apiCall() {
    fetch(`https://dummyjson.com/recipes`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            userData = data.recipes
            printData(data.recipes)
        })
}
apiCall()


function printData(data) {
    container.innerHTML = ""
    container.innerHTML += data.map((item) => {
        return `<div class="card">
                <div class="card-img">
                    <img src="${item.image}" alt="">
                </div>
                <div class="card-content">
                    <div class="card-title">
                    <h5>${item.name}</h5>
                    <button class="card-price">$${(item.caloriesPerServing / 10).toFixed(2)}</button>
                </div>
                <div class="card-description">
                    <p>
                        I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed
                    </p>
                </div>
                </div>
            </div>`
    }).join("")
}



btns.forEach((mealName) => {

    mealName.addEventListener("click",() => {
        let category = mealName.textContent
       if (category == "All") {
            printData(userData)
       }
       else{
        let filtered = userData.filter((item) => {
            return item.mealType.some((type) => {
                return category.toLowerCase() == type.toLowerCase()
            })
        })
        printData(filtered)
       }
    })
    
})

