const apiURL = "//api.openweathermap.org/data/2.5/weather?zip=02111,us&appid=ed5cef8d7c6703faf7f59fa04deadba6&units=imperial"

fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);

        document.getElementById("city").innerHTML=weatherInfo.name;
        document.getElementById("currentTemp").innerHTML=weatherInfo.main.temp;
        document.getElementById("windSpeed").innerHTML=weatherInfo.wind.speed;

        const iconcode = weatherInfo.weather[0].icon;
        console.log(iconcode);

        const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
        console.log(icon_path);

        document.getElementById('weather_icon').src = icon_path;

        const mydate = new Date();
        const y = mydate.getDay();
        console.log(y);

        const myweekday = newArray(7);
        myweekday[0] = "Sunday";
        myweekday[1] = "Monday";
        myweekday[2] = "Tuesday";
        myweekday[3] = "Wednesday";
        myweekday[4] = "Thursday";
        myweekday[5] = "Friday";
        myweekday[6] = "Saturday";

        


    });