var searchEl = document.getElementById("search-button");

var cityName = document.getElementById("City")

var weather = document.getElementById('weather');
var forecast = document.getElementById('Forecast');
var apiKey = "15ce8a000d8c17fd6d6c80ca37333433"

function getForecast(city) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`
    console.log(city)

    fetch(requestUrl)
    .then(function (reponse) {
        return reponse.json();
    })
    .then(function (data) {
        console.log(data)

        for (var i = 0; i < data.list.length; i+=8) {
            const day = data.list[i]
            var card = document.createElement('div');
            card.setAttribute ("class", "card")
            var cardBody = document.createElement('div');
            cardBody.setAttribute ("class", "card-body")
            card.innerHTML = `
            <h2>${day.dt_txt.slice(0,10)}</h2>
            <p>weather ${day.main.temp}</p>
            <p>humidity ${day.main.humidity}</p>
            <p>wind ${day.wind.speed}</p>
            `;
            card.appendChild(cardBody);
            forecast.appendChild(card);
            
        }
    })
}

function getWeather(city) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    console.log(city)

    fetch(requestUrl)
    .then(function (reponse) {
        return reponse.json();
    })
    .then(function (data) {
        console.log(data)
        const day = data
            var card = document.createElement('div');
            card.setAttribute ("class", "card current-weather")
            var cardBody = document.createElement('div');
            cardBody.setAttribute ("class", "card-body")
            card.innerHTML = `
            <p>weather ${day.main.temp}</p>
            <p>humidity ${day.main.humidity}</p>
            <p>wind ${day.wind.speed}</p>
            `;
            card.appendChild(cardBody);
            weather.appendChild(card);
            getForecast(city)
            
        
    })
}

searchEl.addEventListener("click", function () {
    getWeather(cityName.value)

})

