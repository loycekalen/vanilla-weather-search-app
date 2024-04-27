function updateWeatherInfo(response) {
  let temperatureElement = document.querySelector("#weather-value");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("h1");

  cityElement.innerHTML = response.data.city;
}

function citySearch(city) {
  let apiKey = "1485fbda2c63be71004148t8363fo230";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherInfo);
}

function weatherDisplay(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  citySearch(searchInput.value);
}

let searchForm = document.querySelector("#weather-search");
searchForm.addEventListener("submit", weatherDisplay);

citySearch("London");
