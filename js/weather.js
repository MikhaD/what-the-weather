import country from "./countries.js";

export default class Weather {
	static cityInput = document.querySelector("#city-input");
	static countryEl = document.querySelector("#country");
	static cityEl = document.querySelector("#city");
	static weatherEl = document.querySelector("#weather > h3");
	static descriptionEl = document.querySelector("#weather > span");
	static temperatureEl = document.querySelector("#temperature");
	static backgroundEl = document.querySelector("#background");
	static radios = document.querySelectorAll("#units > input[type=radio]");

	/** @type {number} */
	#temperature;
	/** @type {"celsius" | "imperial" | "kelvin"} */
	#unit;
	constructor(data) {
		this.#temperature = data.main.temp;
		this.unit = document.forms.units.elements.unit.value;
		// Update UI
		Weather.countryEl.textContent = country[data.sys.country];
		Weather.cityEl.textContent = data.name;
		Weather.weatherEl.textContent = `Weather: ${data.weather[0].main}`;
		Weather.descriptionEl.textContent = data.weather[0].description;
		// Set tab text
		document.title = `${data.name} Weather`;
		// Set background image
		Weather.backgroundEl.classList.add("hidden");
		Weather.backgroundEl.setAttribute("src", `https://source.unsplash.com/500x250/?${data.name},${data.weather[0].main}`);
		// Set hash
		window.location.hash = data.name.toLowerCase();
	}
	/** Return temperature in the relevant units */
	get temperature() {
		switch (this.#unit) {
			case "imperial": return round(this.#temperature * 1.8, 3) + 32;
			case "kelvin": return round(this.#temperature + 273.15, 3);
			default: return this.#temperature;
		}
	}
	/**
	 * @param {"celsius" | "imperial" | "kelvin"} val
	 */
	set unit(val) {
		this.#unit = val;
		Weather.temperatureEl.textContent = `Temperature: ${this.temperature}°${this.unit}`;
	}
	get unit() {
		switch (this.#unit) {
			case "imperial": return "F";
			case "kelvin": return "K";
			default: return "C";
		}
	}
	static clearUI() {
		Weather.cityEl.textContent = "";
		Weather.countryEl.textContent = "";
		Weather.weatherEl.textContent = "";
		Weather.descriptionEl.textContent = "";
		Weather.temperatureEl.textContent = "";
		Weather.backgroundEl.classList.add("hidden");
		document.title = `Weather`;
		window.location.hash = "";
	}
	/**
	 * Fetch the weather data for the given city.
	 * (code obfuscated)
	 * @param {string} city
	 */
	static async fetchWeather(city) {
		function _0x4c9c(_0x3f9f24, _0x207696) { const _0x109349 = _0x2f37(); return _0x4c9c = function(_0x1babf1, _0xf9ac0) { _0x1babf1 = _0x1babf1 - (-0xbb + 0x4 * 0x8d5 + -0x8e * 0x3b); let _0x475484 = _0x109349[_0x1babf1]; return _0x475484; }, _0x4c9c(_0x3f9f24, _0x207696); } function _0x2f37() { const _0x5101b0 = ['VhYjdlNzU5', 'NGIzOGExMj', '100740iEzdSr', '358082ebMvZP', 'https://ap', 'weather?q=', '6RirsnG', '384ToUhsL', '531KZOTpP', '/data/2.5/', 'hermap.org', 'json', '&units=', '1852650ssTpUQ', 'OGZmNDhhZj', '72naFXDU', '104nsBZBc', 'liYjg5MDM5', 'YTI=', '7343IDKFVa', 'i.openweat', '&appid=', '406340VOcnge', '36190ReouXu', '707529WsJoQH']; _0x2f37 = function() { return _0x5101b0; }; return _0x2f37(); } const _0x5ed585 = _0x4c9c; (function(_0x463084, _0x43b4e8) { const _0x3fbf3e = _0x4c9c, _0x3660ae = _0x463084(); while (!![]) { try { const _0xad46f1 = -parseInt(_0x3fbf3e(0x1f3)) / (0x1 * -0xeab + -0x8d * 0x43 + 0x3393) + parseInt(_0x3fbf3e(0x1f7)) / (-0x56 * -0x26 + 0x1910 + -0x5e * 0x67) * (parseInt(_0x3fbf3e(0x1e1)) / (-0x13e9 + 0x1 * 0x1cd3 + -0x8e7)) + parseInt(_0x3fbf3e(0x1ea)) / (0x1191 * -0x1 + 0x33c + -0x1 * -0xe59) * (-parseInt(_0x3fbf3e(0x1f6)) / (-0x1 * -0x10d2 + 0x2220 + 0x32ed * -0x1)) + -parseInt(_0x3fbf3e(0x1e8)) / (0x1 * 0x1f9d + 0x20a1 + 0x4038 * -0x1) + -parseInt(_0x3fbf3e(0x1ee)) / (-0xfe7 + -0x777 * -0x1 + 0x877) * (parseInt(_0x3fbf3e(0x1eb)) / (0x85 * 0x38 + 0x4 * -0x649 + 0x1f6 * -0x2)) + -parseInt(_0x3fbf3e(0x1e3)) / (0x526 + 0x2397 + -0x28b4) * (-parseInt(_0x3fbf3e(0x1f2)) / (-0x907 + 0x16a6 * -0x1 + -0x17 * -0x161)) + parseInt(_0x3fbf3e(0x1f1)) / (-0x17dd + 0x17f + 0x1669) * (parseInt(_0x3fbf3e(0x1e2)) / (0x11 * 0x24 + -0x3b * 0x85 + 0x1c4f)); if (_0xad46f1 === _0x43b4e8) break; else _0x3660ae['push'](_0x3660ae['shift']()); } catch (_0x97143f) { _0x3660ae['push'](_0x3660ae['shift']()); } } }(_0x2f37, -0xaae34 + -0x10e9a + 0x113f44)); const k = atob(_0x5ed585(0x1f5) + _0x5ed585(0x1ec) + _0x5ed585(0x1e9) + _0x5ed585(0x1f4) + _0x5ed585(0x1ed)); let data = await fetch(_0x5ed585(0x1df) + _0x5ed585(0x1ef) + _0x5ed585(0x1e5) + _0x5ed585(0x1e4) + _0x5ed585(0x1e0) + city + _0x5ed585(0x1f0) + k + _0x5ed585(0x1e7) + "metric"); return await data[_0x5ed585(0x1e6)]();
	}
}

/**
 * Round to the nth decimal place
 * @param {number} value The value to round
 * @param {number} n The maximum number of decimal places after the comma
 */
function round(value, n) {
	return Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
}
