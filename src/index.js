function updateWeatherInfo(response) {
  let temperatureElement = document.querySelector("#weather-value");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("h1");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  timeElement.innerHTML = formatDate(date);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon" />`;

  getForecast(response.data.city);
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${day} ${hours}:${minutes}`;
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

function getForecast(city) {
  apikey = "1485fbda2c63be71004148t8363fo230";
  apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#weather-forecast");

  let days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  let forecast = "";
  days.forEach(function (day) {
    forecast =
      forecast +
      `<div class="weather-forecast-day">
      <div class="forecast-date">${day}</div>
          <div class="forecast-icon">☀</div>
          <div class="forecast-temperatures">
            <div class="forecast-max-temperature">
              <strong>18&deg;</strong> /
              <span class="forecast-min-temperature">11&deg;</span>
            </div>
          </div>
          </div>`;
  });
  forecastElement.innerHTML = forecast;
}

let searchForm = document.querySelector("#weather-search");
searchForm.addEventListener("submit", weatherDisplay);

citySearch("Banff");
displayForecast();
