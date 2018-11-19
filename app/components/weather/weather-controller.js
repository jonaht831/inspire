import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function drawWeather(weather) {
	var template = `
		<h2>${weather.name}</h2>
		<h2>${(9 / 5 * (weather.main.temp - 273) + 32).toFixed(1)}</h2>`
	document.getElementById('weather').innerHTML = template
}

export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather(drawWeather)
	}
	getWeather(drawWeather) {
		weatherService.getWeather(drawWeather)
		//What can you do with this weather object?
	}
}
