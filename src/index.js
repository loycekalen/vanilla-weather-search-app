function weatherDisplay(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#weather-search");
searchForm.addEventListener("submit", weatherDisplay);

function showWeather(response) {}
let apiKey = "1485fbda2c63be71004148t8363fo230";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(showWeather);
