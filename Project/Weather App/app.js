document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "39a3bef3d1f72d61f95a7d74e78a9d93"; // Replace with your actual API key from OpenWeatherMap
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

    const searchInput = document.querySelector(".search input");
    const searchButton = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");
    const temperatureElement = document.querySelector(".temp");
    const cityElement = document.querySelector(".city");
    const humidityElement = document.querySelector(".humidity");
    const windElement = document.querySelector(".wind");

    searchButton.addEventListener("click", () => {
        const cityName = searchInput.value;
        if (cityName) {
            fetchWeatherData(cityName);
        }
    });

    async function fetchWeatherData(city) {
        try {
            const response = await fetch(`${apiUrl}?q=${city}&units=metric&appid=${apiKey}`);
            const data = await response.json();

            weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            temperatureElement.textContent = `${data.main.temp}°C`;
            cityElement.textContent = data.name;
            humidityElement.textContent = `${data.main.humidity}%`;
            windElement.textContent = `${data.wind.speed} Km/h`;

            // weatherIcon.src = `Images/${weatherData.icon}.png`;
            // temperature.textContent = `${weatherData.temperature}°C`;
            // city.textContent = weatherData.city;
            // humidity.textContent = `${weatherData.humidity}%`;
            // windSpeed.textContent = `${weatherData.windSpeed} Km/h`;
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }
});




// document.addEventListener("DOMContentLoaded", () => {
//     const apiKey = "39a3bef3d1f72d61f95a7d74e78a9d93"; // Replace with your actual API key from OpenWeatherMap
//     const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

//     const searchInput = document.querySelector(".search input");
//     const searchButton = document.querySelector(".search button");
//     const weathericon = document.querySelector(".weather-icon");
//     const temperatureElement = document.querySelector(".temp");
//     const cityElement = document.querySelector(".city");
//     const humidityElement = document.querySelector(".humidity");
//     const windElement = document.querySelector(".wind");

//     searchButton.addEventListener("click", () => {
//         const cityName = searchInput.value;
//         if (cityName) {
//             fetchWeatherData(cityName);
//         }
//     });

//     async function fetchWeatherData(city) {
//         try {
//             const response = await fetch(`${apiUrl}?q=${city}&units=metric&appid=${apiKey}`);
//             const data = await response.json();

//             // Use your custom weather icon path

//             console.log("Icon Code:", data.weather[0].icon);
         
//             weatherIcon.src = `Images/${data.weather[0].icon}.png`;

//             temperatureElement.textContent = `${data.main.temp}°C`;
//             cityElement.textContent = data.name;
//             humidityElement.textContent = `${data.main.humidity}%`;
//             windElement.textContent = `${data.wind.speed} Km/h`;

//         } catch (error) {
//             console.error("Error fetching weather data:", error);
//         }
//     }
// });
