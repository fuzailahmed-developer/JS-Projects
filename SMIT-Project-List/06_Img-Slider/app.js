let count = 0;
let img = document.querySelector(".img-container img")
setInterval(() => {
    if (count < 6) {
        count++
    } else count = 1
    img.src = `./img-${count}.jpg`
},1000)