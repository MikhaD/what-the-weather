import Weather from "./weather.js";

let w = null;

// ######################################## Event Listeners ########################################
window.addEventListener("hashchange", () => onClick({ target: { value: window.location.hash.slice(1) } }));
document.getElementById("go").addEventListener("click", onClick);
Weather.backgroundEl.addEventListener("load", function() { this.classList.remove("hidden"); });
Weather.radios.forEach(radio => radio.addEventListener("click", e => w && (w.unit = e.target.value)));
Weather.cityInput.addEventListener("keydown", e => {
	if (e.keyCode === 13) { // 13 is Enter
		e.preventDefault();
		onClick({ target: Weather.cityInput });
	}
});

async function onClick(e) {
	if (!e.target.value) return;

	const city = e.target.value;
	Weather.cityInput.value = "";
	try {
		const data = await Weather.fetchWeather(city);
		w = new Weather(data);
	} catch {
		Weather.clearUI();
		Weather.cityEl.textContent = `Could not find data for ${city}`;
	}
}

// ############################################ Routing ############################################
if (window.location.hash) {
	onClick({ target: { value: window.location.hash.slice(1) } });
}