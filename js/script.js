const confirmBtn = document.querySelector("#go");
const cityInput = document.querySelector("#city-input");
const cityElement = document.querySelector("#city");
const weatherElements = document.querySelector("#weather");
const weathEl = weatherElements.querySelector("h3");
const descEl = weatherElements.querySelector("span");
const temperatureElement = document.querySelector("#temperature");
const backgroundElement = document.querySelector("#background");
const APIKey = "38c52cc7a11aaf6af93dbe5908f6fd06";
let currentHash;

const symbol = {
	metric: "C",
	imperial: "F",
	kelvin: "K"
}

confirmBtn.addEventListener("click", onClick);

async function onClick() {
	if (!cityInput.value) return;

	const city = cityInput.value;
	cityInput.value = "";
	try {
		const units = document.forms.units.elements.unit.value;
		const data = await fetchWeather(city, units);

		updateUI(data.name, data.weather[0].main, data.weather[0].description, data.main.temp, units);
		setBackgroundImage(data.name, data.weather[0].main);
		setHash(city.toLowerCase());
	} catch {
		clearUI();
		cityElement.textContent = `Could not find data for ${city}`;
		setHash("");
	}
}

function updateUI(city, weather, description, temp, units) {
	cityElement.textContent = city;
	weathEl.textContent = `Weather: ${weather}`;
	descEl.textContent = description;
	temperatureElement.textContent = `Temperature: ${temp}°${symbol[units]}`;
	document.title = `${city} Weather`;
}

function clearUI() {
	cityElement.textContent = "";
	weathEl.textContent = "";
	descEl.textContent = "";
	temperatureElement.textContent = "";
	document.title = `Weather`;
	backgroundElement.classList.add("hidden");
}

async function fetchWeather(city, units) {
	let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=${units}`);
	return await data.json();
}

function setBackgroundImage(city, weather) {
	backgroundElement.classList.add("hidden");
	backgroundElement.setAttribute("src", `https://source.unsplash.com/500x250/?${city},${weather}`);
}

backgroundElement.addEventListener("load", () => backgroundElement.classList.remove("hidden"));

cityInput.addEventListener("keyup", (e) => {
	// 13 is the enter key
	if (e.keyCode === 13) {
		e.preventDefault();
		onClick();
	}
});

function setHash(value) {
	currentHash = value;
	window.location.hash = value;
}

window.addEventListener("hashchange", (e) => {
	if (window.location.hash === currentHash || window.location.hash === `#${currentHash}`) return;

	cityInput.value = window.location.hash.slice(1);
	onClick();
})

//info ############################################### Routing ###############################################

if (window.location.hash) {
	cityInput.value = window.location.hash.slice(1);
	onClick();
}