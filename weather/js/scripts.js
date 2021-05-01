const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5816861&appid=ed5cef8d7c6703faf7f59fa04deadba6&units=imperial"

fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(changeme);
    })