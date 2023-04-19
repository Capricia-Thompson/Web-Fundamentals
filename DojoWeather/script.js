function changeCity(city) {
    alert("Loading weather report...")
    document.querySelector(".current-city").innerText = city
}

function acceptCookies() {
    document.querySelector(".cookie-notif").remove()
}

function changeTemp(tempUnit) {
    let days = [".day1", ".day2", ".day3", ".day4", ".day5", ".day6", ".day7"]
    for (let i = 0; i < days.length; i++) {
        var container = document.querySelector(days[i])
        var temps = [".high", ".low"]
        for (let j = 0; j < temps.length; j++) {
            var tempLimit = container.querySelector(temps[j])
            if (tempUnit == "tempC") {
                var element = tempLimit.querySelector(".tempF")
                var temp = element.innerText
                temp = Math.round((temp - 32) / 1.8)
                element.innerText = temp
                element.classList.add("tempC")
                element.classList.remove("tempF")
            } else if (tempUnit == "tempF") {
                var element = tempLimit.querySelector(".tempC")
                var temp = element.innerText
                temp = Math.round((temp * 1.8) + 32)
                element.innerText = temp
                element.classList.add("tempF")
                element.classList.remove("tempC")
            }
        }
    }
}