const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const weatherCard = document.getElementById("weatherCard");
const cityName = document.getElementById("cityName");

const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const condition = document.getElementById("condition");

const message = document.getElementById("message");

const API_KEY = "fb25caa7d862648215c1e790e1eb2ef8";


async function getWeather(city) {
    try {
        message.textContent = "Loading...";
        weatherCard.classList.add("hidden");

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        console.log(data);

        cityName.textContent = data.name;
        temperature.textContent = `${data.main.temp} °C`;
        humidity.textContent = `${data.main.humidity}%`;
        windSpeed.textContent = `${data.wind.speed} m/s`;
        condition.textContent = data.weather[0].main;

        weatherCard.classList.remove("hidden");
        message.textContent = "";

    } catch (error) {
        weatherCard.classList.add("hidden");
        message.textContent = error.message;
        console.error(error);
    }
}
searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if (city === "") {
        message.textContent = "Please enter a city name.";
        weatherCard.classList.add("hidden");
        return;
    }

    getWeather(city);
});