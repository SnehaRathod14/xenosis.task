document.getElementById('getWeather').addEventListener('click', getWeather);

function getWeather() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const city = 'New York'; // Replace with desired city
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp} &deg;C</p>
                <p>Weather: ${data.weather[0].main}</p>
            `;
            document.getElementById('weather').innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            document.getElementById('weather').innerHTML = '<p>Failed to fetch weather data</p>';
        });
}
