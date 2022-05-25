(() => {
	const confirmBtn = document.querySelector("#go");
	const cityInput = document.querySelector("#city-input");
	const cityElement = document.querySelector("#city");
	const weatherElements = document.querySelector("#weather");
	const weathEl = weatherElements.querySelector("h3");
	const descEl = weatherElements.querySelector("span");
	const temperatureElement = document.querySelector("#temperature");
	const backgroundElement = document.querySelector("#background");
	let currentHash;

	const symbol = {
		metric: "C",
		imperial: "F",
		kelvin: "K"
	};

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

	// code obfuscated
	async function fetchWeather(city, units) {
		function _0x4c9c(_0x3f9f24, _0x207696) { const _0x109349 = _0x2f37(); return _0x4c9c = function (_0x1babf1, _0xf9ac0) { _0x1babf1 = _0x1babf1 - (-0xbb + 0x4 * 0x8d5 + -0x8e * 0x3b); let _0x475484 = _0x109349[_0x1babf1]; return _0x475484; }, _0x4c9c(_0x3f9f24, _0x207696); } function _0x2f37() { const _0x5101b0 = ['VhYjdlNzU5', 'NGIzOGExMj', '100740iEzdSr', '358082ebMvZP', 'https://ap', 'weather?q=', '6RirsnG', '384ToUhsL', '531KZOTpP', '/data/2.5/', 'hermap.org', 'json', '&units=', '1852650ssTpUQ', 'OGZmNDhhZj', '72naFXDU', '104nsBZBc', 'liYjg5MDM5', 'YTI=', '7343IDKFVa', 'i.openweat', '&appid=', '406340VOcnge', '36190ReouXu', '707529WsJoQH']; _0x2f37 = function () { return _0x5101b0; }; return _0x2f37(); } const _0x5ed585 = _0x4c9c; (function (_0x463084, _0x43b4e8) { const _0x3fbf3e = _0x4c9c, _0x3660ae = _0x463084(); while (!![]) { try { const _0xad46f1 = -parseInt(_0x3fbf3e(0x1f3)) / (0x1 * -0xeab + -0x8d * 0x43 + 0x3393) + parseInt(_0x3fbf3e(0x1f7)) / (-0x56 * -0x26 + 0x1910 + -0x5e * 0x67) * (parseInt(_0x3fbf3e(0x1e1)) / (-0x13e9 + 0x1 * 0x1cd3 + -0x8e7)) + parseInt(_0x3fbf3e(0x1ea)) / (0x1191 * -0x1 + 0x33c + -0x1 * -0xe59) * (-parseInt(_0x3fbf3e(0x1f6)) / (-0x1 * -0x10d2 + 0x2220 + 0x32ed * -0x1)) + -parseInt(_0x3fbf3e(0x1e8)) / (0x1 * 0x1f9d + 0x20a1 + 0x4038 * -0x1) + -parseInt(_0x3fbf3e(0x1ee)) / (-0xfe7 + -0x777 * -0x1 + 0x877) * (parseInt(_0x3fbf3e(0x1eb)) / (0x85 * 0x38 + 0x4 * -0x649 + 0x1f6 * -0x2)) + -parseInt(_0x3fbf3e(0x1e3)) / (0x526 + 0x2397 + -0x28b4) * (-parseInt(_0x3fbf3e(0x1f2)) / (-0x907 + 0x16a6 * -0x1 + -0x17 * -0x161)) + parseInt(_0x3fbf3e(0x1f1)) / (-0x17dd + 0x17f + 0x1669) * (parseInt(_0x3fbf3e(0x1e2)) / (0x11 * 0x24 + -0x3b * 0x85 + 0x1c4f)); if (_0xad46f1 === _0x43b4e8) break; else _0x3660ae['push'](_0x3660ae['shift']()); } catch (_0x97143f) { _0x3660ae['push'](_0x3660ae['shift']()); } } }(_0x2f37, -0xaae34 + -0x10e9a + 0x113f44)); const k = atob(_0x5ed585(0x1f5) + _0x5ed585(0x1ec) + _0x5ed585(0x1e9) + _0x5ed585(0x1f4) + _0x5ed585(0x1ed)); let data = await fetch(_0x5ed585(0x1df) + _0x5ed585(0x1ef) + _0x5ed585(0x1e5) + _0x5ed585(0x1e4) + _0x5ed585(0x1e0) + city + _0x5ed585(0x1f0) + k + _0x5ed585(0x1e7) + units); return await data[_0x5ed585(0x1e6)]();
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
	});

	//info ############################################### Routing ###############################################

	if (window.location.hash) {
		cityInput.value = window.location.hash.slice(1);
		onClick();
	}
})();