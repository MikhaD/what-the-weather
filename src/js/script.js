const confirm = document.querySelector("#confirm");
const cityInput = document.querySelector("#city-input");
const cityElement = document.querySelector("#city");
const weatherElement = document.querySelector("#weather");
const temperatureElement = document.querySelector("#temperature");
const APIKey = "38c52cc7a11aaf6af93dbe5908f6fd06";

confirm.addEventListener("click", onClick);

async function onClick() {
	try {
		const data = await fetchWeather(cityInput.value);
		updateUI(data.name, data.weather[0].main, data.main.temp);
	} catch {
		clearUI();
		cityElement.textContent = `Could not find the city of ${cityInput.value}`;
	}
}

function updateUI(city, weather, temp) {
	cityElement.textContent = city;
	weatherElement.textContent = `Weather: ${weather}`;
	temperatureElement.textContent = `Temperature: ${temp}°C`;
	document.title = `${city} Weather`;
}

function clearUI() {
	cityElement.textContent = "";
	weatherElement.textContent = "";
	temperatureElement.textContent = "";
	document.title = `Weather`;

}

async function fetchWeather(city) {
	let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`);
	return await data.json();
}