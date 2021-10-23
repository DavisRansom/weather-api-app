//variables
var inputEl = document.querySelector("input name=city")
var submitBtn = document.querySelector
var previousCityContainer
var mainEl
var forecast = document.querySelector("#forecast")

var openWeatherApiKey =
//API Key
var city = "bakersfield"
var geoLocateUrl = + city + "app id"

fetch(geoLocateCityUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        var cityInfo = data[0]
        var getWeatherUrl = "getweatherurl + cityInfo.lat + "
    })

fetch(getWeatherUrl)
    .then(weatherData)


var cityNameEl = document.
    createElement("h2")
cityNameEl.textcontent = city.toUpperCase
mainEl.append(cityWeatherList)

var cityWeatherList = document.
    createElement("ul")

var temp = document.createElement("li")
window.textcontent = weatherData

var wind = document.createElement()

var humidity = document.createElement()

var uvi = document.createElement()

mainEl.append(cityWeatherList)
//Forecast Section
var forecastTitle = document.createElement("h2")
forecast.append(document.createElement("h2"))

for (var i = 0; i < weatherData.daily.length; i++) {
    var dayXWeatherCard = document.createElement("ul")
}

moment(date)

formEl.addEventListener("submit"),
    function (e) {
        e.preventDefault()
    }

