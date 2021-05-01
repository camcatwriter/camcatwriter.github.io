const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5879400&appid=ed5cef8d7c6703faf7f59fa04deadba6&units=imperial"

fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);

        document.getElementById("city").innerHTML=weatherInfo.city.name;
        // document.getElementById("currentTemp").innerHTML=weatherInfo.list[0].main.temp;
        // document.getElementById("windSpeed").innerHTML=weatherInfo.list[0].wind.speed;

        const iconcode = weatherInfo.list[0].weather[0].icon;
        // console.log(iconcode);

        const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
        // console.log(icon_path);

        // document.getElementById('weather_icon').src = icon_path;

        const mydate = new Date();
        const y = mydate.getDay();
        console.log(y);

        const myweekday = new Array(7);
        myweekday[0] = "Sunday";
        myweekday[1] = "Monday";
        myweekday[2] = "Tuesday";
        myweekday[3] = "Wednesday";
        myweekday[4] = "Thursday";
        myweekday[5] = "Friday";
        myweekday[6] = "Saturday";

        console.log(myweekday[6]);

        const d = new Date();
        const todayDayNumber = d.getDay();
        let forecastDayNumber = todayDayNumber;
        console.log(forecastDayNumber);
        
    for (i = 0; i < 40; i++) {
        var time = weatherInfo.list[i].dt_txt;
        if (time.includes('21:00:00')){
            forecastDayNumber += 1;
            
            if (forecastDayNumber === 7) {
                forecastDayNumber = 0;
            }

            let theDayName = document.createElement("span");
            theDayName.textContent = myweekday[forecastDayNumber];
            console.log(">"+myweekday[forecastDayNumber]);

            let theTemp = document.createElement("p");
            theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

            let iconcode = weatherInfo.list[i].weather[0].icon;
            let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
            let theIcon = document.createElement("img")
            theIcon.src = iconPath;

            let theDay = document.createElement("div");
            theDay.appendChild(theDayName);
            theDay.appendChild(theTemp);
            theDay.appendChild(theIcon);
            console.log(theDay);
            document.getElementById('weatherforecast').appendChild(theDay); 

        }

    }

});