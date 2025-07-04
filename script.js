document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

async function getWeather() {
    const apiKey = 'b465c45b10bf1c969e40e5bf29ad3e44'; // Your provided API key
    const city = document.getElementById('city').value;

    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            document.getElementById('weatherResult').innerHTML = `<p>City not found!</p>`;
        } else {
            document.getElementById('weatherResult').innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        }
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p>Failed to fetch weather data.</p>`;
    }
}
