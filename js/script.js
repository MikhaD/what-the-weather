(() => {
	const confirmBtn = document.querySelector("#go");
	const cityInput = document.querySelector("#city-input");
	const cityElement = document.querySelector("#city");
	const countryElement = document.querySelector("#country");
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

			updateUI(data.sys.country, data.name, data.weather[0].main, data.weather[0].description, data.main.temp, units);
			setBackgroundImage(data.name, data.weather[0].main);
			setHash(city.toLowerCase());
		} catch {
			clearUI();
			cityElement.textContent = `Could not find data for ${city}`;
			setHash("");
		}
	}

	function updateUI(country, city, weather, description, temp, units) {
		cityElement.textContent = city;
		countryElement.textContent = countries[country];
		weathEl.textContent = `Weather: ${weather}`;
		descEl.textContent = description;
		temperatureElement.textContent = `Temperature: ${temp}°${symbol[units]}`;
		document.title = `${city} Weather`;
	}

	function clearUI() {
		cityElement.textContent = "";
		countryElement.textContent = "";
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
		// 13 is the code for the enter key
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

	const countries = {
		"AF": "Afghanistan",
		"AL": "Albania",
		"DZ": "Algeria",
		"AS": "American Samoa",
		"AD": "Andorra",
		"AO": "Angola",
		"AI": "Anguilla",
		"AQ": "Antarctica",
		"AG": "Antigua and Barbuda",
		"AR": "Argentina",
		"AM": "Armenia",
		"AW": "Aruba",
		"AU": "Australia",
		"AT": "Austria",
		"AZ": "Azerbaijan",
		"BS": "The Bahamas",
		"BH": "Bahrain",
		"BD": "Bangladesh",
		"BB": "Barbados",
		"BY": "Belarus",
		"BE": "Belgium",
		"BZ": "Belize",
		"BJ": "Benin",
		"BM": "Bermuda",
		"BT": "Bhutan",
		"BO": "Bolivia",
		"BQ": "Bonaire, Sint Eustatius and Saba",
		"BA": "Bosnia and Herzegovina",
		"BW": "Botswana",
		"BV": "Bouvet Island",
		"BR": "Brazil",
		"IO": "British Indian Ocean Territory",
		"BN": "Brunei Darussalam",
		"BG": "Bulgaria",
		"BF": "Burkina Faso",
		"BI": "Burundi",
		"CV": "Cabo Verde",
		"KH": "Cambodia",
		"CM": "Cameroon",
		"CA": "Canada",
		"KY": "The Cayman Islands",
		"CF": "The Central African Republic",
		"TD": "Chad",
		"CL": "Chile",
		"CN": "China",
		"CX": "Christmas Island",
		"CC": "The Cocos Islands",
		"CO": "Colombia",
		"KM": "The Comoros",
		"CD": "The Democratic Republic of the Congo",
		"CG": "The Congo",
		"CK": "The Cook Islands",
		"CR": "Costa Rica",
		"HR": "Croatia",
		"CU": "Cuba",
		"CW": "Cura\u00c3\u00a7ao",
		"CY": "Cyprus",
		"CZ": "Czechia",
		"CI": "C\u00c3\u00b4te d'Ivoire",
		"DK": "Denmark",
		"DJ": "Djibouti",
		"DM": "Dominica",
		"DO": "The Dominican Republic",
		"EC": "Ecuador",
		"EG": "Egypt",
		"SV": "El Salvador",
		"GQ": "Equatorial Guinea",
		"ER": "Eritrea",
		"EE": "Estonia",
		"SZ": "Eswatini",
		"ET": "Ethiopia",
		"FK": "The Falkland Islands",
		"FO": "The Faroe Islands",
		"FJ": "Fiji",
		"FI": "Finland",
		"FR": "France",
		"GF": "French Guiana",
		"PF": "French Polynesia",
		"TF": "The French Southern Territories",
		"GA": "Gabon",
		"GM": "Gambia",
		"GE": "Georgia",
		"DE": "Germany",
		"GH": "Ghana",
		"GI": "Gibraltar",
		"GR": "Greece",
		"GL": "Greenland",
		"GD": "Grenada",
		"GP": "Guadeloupe",
		"GU": "Guam",
		"GT": "Guatemala",
		"GG": "Guernsey",
		"GN": "Guinea",
		"GW": "Guinea-Bissau",
		"GY": "Guyana",
		"HT": "Haiti",
		"HM": "Heard Island and McDonald Islands",
		"VA": "The Vatican",
		"HN": "Honduras",
		"HK": "Hong Kong",
		"HU": "Hungary",
		"IS": "Iceland",
		"IN": "India",
		"ID": "Indonesia",
		"IR": "Iran",
		"IQ": "Iraq",
		"IE": "Ireland",
		"IM": "Isle of Man",
		"IL": "Israel",
		"IT": "Italy",
		"JM": "Jamaica",
		"JP": "Japan",
		"JE": "Jersey",
		"JO": "Jordan",
		"KZ": "Kazakhstan",
		"KE": "Kenya",
		"KI": "Kiribati",
		"KP": "North Korea",
		"KR": "South Korea",
		"KW": "Kuwait",
		"KG": "Kyrgyzstan",
		"LA": "The Lao People's Democratic Republic",
		"LV": "Latvia",
		"LB": "Lebanon",
		"LS": "Lesotho",
		"LR": "Liberia",
		"LY": "Libya",
		"LI": "Liechtenstein",
		"LT": "Lithuania",
		"LU": "Luxembourg",
		"MO": "Macao",
		"MG": "Madagascar",
		"MW": "Malawi",
		"MY": "Malaysia",
		"MV": "Maldives",
		"ML": "Mali",
		"MT": "Malta",
		"MH": "The Marshall Islands",
		"MQ": "Martinique",
		"MR": "Mauritania",
		"MU": "Mauritius",
		"YT": "Mayotte",
		"MX": "Mexico",
		"FM": "Micronesia",
		"MD": "The Republic of Moldova",
		"MC": "Monaco",
		"MN": "Mongolia",
		"ME": "Montenegro",
		"MS": "Montserrat",
		"MA": "Morocco",
		"MZ": "Mozambique",
		"MM": "Myanmar",
		"NA": "Namibia",
		"NR": "Nauru",
		"NP": "Nepal",
		"NL": "The Netherlands",
		"NC": "New Caledonia",
		"NZ": "New Zealand",
		"NI": "Nicaragua",
		"NE": "The Niger",
		"NG": "Nigeria",
		"NU": "Niue",
		"NF": "Norfolk Island",
		"MP": "The Northern Mariana Islands",
		"NO": "Norway",
		"OM": "Oman",
		"PK": "Pakistan",
		"PW": "Palau",
		"PS": "Palestine",
		"PA": "Panama",
		"PG": "Papua New Guinea",
		"PY": "Paraguay",
		"PE": "Peru",
		"PH": "The Philippines",
		"PN": "Pitcairn",
		"PL": "Poland",
		"PT": "Portugal",
		"PR": "Puerto Rico",
		"QA": "Qatar",
		"MK": "Republic of North Macedonia",
		"RO": "Romania",
		"RU": "Russia",
		"RW": "Rwanda",
		"RE": "R\u00c3\u00a9union",
		"BL": "Saint Barth\u00c3\u00a9lemy",
		"SH": "Saint Helena",
		"KN": "Saint Kitts and Nevis",
		"LC": "Saint Lucia",
		"MF": "Saint Martin",
		"PM": "Saint Pierre and Miquelon",
		"VC": "Saint Vincent and the Grenadines",
		"WS": "Samoa",
		"SM": "San Marino",
		"ST": "Sao Tome and Principe",
		"SA": "Saudi Arabia",
		"SN": "Senegal",
		"RS": "Serbia",
		"SC": "Seychelles",
		"SL": "Sierra Leone",
		"SG": "Singapore",
		"SX": "Sint Maarten",
		"SK": "Slovakia",
		"SI": "Slovenia",
		"SB": "Solomon Islands",
		"SO": "Somalia",
		"ZA": "South Africa",
		"GS": "South Georgia and the South Sandwich Islands",
		"SS": "South Sudan",
		"ES": "Spain",
		"LK": "Sri Lanka",
		"SD": "The Sudan",
		"SR": "Suriname",
		"SJ": "Svalbard and Jan Mayen",
		"SE": "Sweden",
		"CH": "Switzerland",
		"SY": "Syrian Arab Republic",
		"TW": "Taiwan",
		"TJ": "Tajikistan",
		"TZ": "United Republic of Tanzania",
		"TH": "Thailand",
		"TL": "Timor-Leste",
		"TG": "Togo",
		"TK": "Tokelau",
		"TO": "Tonga",
		"TT": "Trinidad and Tobago",
		"TN": "Tunisia",
		"TR": "Turkey",
		"TM": "Turkmenistan",
		"TC": "The Turks and Caicos Islands",
		"TV": "Tuvalu",
		"UG": "Uganda",
		"UA": "Ukraine",
		"AE": "The United Arab Emirates",
		"GB": "The United Kingdom of Great Britain and Northern Ireland",
		"UM": "The United States Minor Outlying Islands",
		"US": "The United States of America",
		"UY": "Uruguay",
		"UZ": "Uzbekistan",
		"VU": "Vanuatu",
		"VE": "Venezuela",
		"VN": "Viet Nam",
		"VG": "British Virgin Islands",
		"VI": "U.S. Virgin Islands",
		"WF": "Wallis and Futuna",
		"EH": "Western Sahara",
		"YE": "Yemen",
		"ZM": "Zambia",
		"ZW": "Zimbabwe",
		"AX": "\u00c3\u2026land Islands"
	};
})();