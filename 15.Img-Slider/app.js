let img = document.querySelectorAll(".slider-img");
let length = img.length;
let count = 1;

let slideHandler = (initial) => {
    if (initial > length) {
        count = 1;
    } else if (initial < 1) {
        count = length;
    } else {
        count = initial; // ✅ update count here
    }

    for (let i = 0; i < length; i++) {
        img[i].style.display = "none";
    }

    img[count - 1].style.display = "block";
};

slideHandler(count);

setInterval(() => {
    slideHandler(count + 1);
}, 2000); // ⏱️ changed to 2 seconds for better UX
