let cityName = document.querySelector(".content h4")
let dateTime = document.querySelector(".content p")
let wetherForecast = document.querySelector(".content span")
let icon = document.querySelector(".icon-box i")
let temp = document.querySelector(".icon-box h4")
let maxTemp = document.querySelector(".max-min").firstElementChild
let minTemp = document.querySelector(".max-min").lastElementChild

let feelsLike = document.querySelector(".feels-like")
let humidity = document.querySelector(".humidity")
let windSpeed = document.querySelector(".wind")
let pressure = document.querySelector(".pressure")

let input = document.querySelector(".search input")
let inputVal;
input.addEventListener("change",(e) => {
    inputVal = e.target.value
    input.value = ""
    getWeatherData()
})


let getWeatherData = async () => {

    if (!inputVal) {
        inputVal = "karachi"
    }

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&APPID=bd89e7b43ac339c3f68768afe05a3ab6`
    try {

        const res = await fetch(apiUrl)
        const data = await res.json()
        // console.log(data);

        const { main, name, weather, wind, sys, dt } = data

        const regionNames = new Intl.DisplayNames([sys.country], { type: 'region' }); // country code to country name convert! 
        cityName.textContent = `${name} ${regionNames.of(sys.country)}`

        dateTime.textContent = dtCountry(dt) // print date

        console.log();

        wetherForecast.textContent = weather[0].main
        icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png" width='120px'/>`



        temp.textContent = `${main.temp}°`
        minTemp.textContent = `${main.temp_min}°`
        maxTemp.textContent = `${main.temp_max}°`

        feelsLike.innerHTML = `${main.feels_like}&deg`
        humidity.innerHTML = `${main.humidity}&deg`
        pressure.innerHTML = `${main.pressure}&deg`
        windSpeed.innerHTML = `${wind.speed}&deg`

    } catch (error) {
        alert("Invalid City Name!")
    }
}


document.body.addEventListener("load", getWeatherData())



// convert millisecond to dateformate 

function dtCountry(millisecond) {
    let currDate = new Date(millisecond * 1000)

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    };

    let formatter = new Intl.DateTimeFormat("en-US",options)
    return formatter.format(currDate)
}