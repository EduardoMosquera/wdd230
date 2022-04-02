let gotPosition = function(pos) {
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    getForecast(lat, long);
}

let getForecast = function(lat, long) {
    let url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&units=metric&exclude=current,minutely,hourly&appid=2996130d56f9a2e4c8f6a515f56da672";
    getWeatherText(url);
}

async function getWeatherText(url) {
    let weatherObject = await fetch(url);
    let weatherText = await weatherObject.text();
    console.log(weatherObject);
    console.log(weatherText);
    parseWeather(weatherText);
}

let parseWeather = function(weatherText) {
    let weatherJSON = JSON.parse(weatherText);
    console.log(weatherJSON);
    let dailyForecast = weatherJSON.daily;
    //console.log(dailyForecast);
    for (x = 0; x < dailyForecast.length; x++) {
        let day = dailyForecast[x];
        let today = new Date().getDay() + x;
        if (today > 6) {
            today = today - 7;
        }
        let dayOfWeek = getDayOfWeek(today);
        let description = day.weather[0].description;
        let icon = day.weather[0].icon;
        let highTemp = Math.round(day.temp.max);
        let lowTemp = Math.round(day.temp.min);
        let humidity = day.humidity;
        displayWeatherDay(dayOfWeek, description, icon, highTemp, lowTemp, humidity);
    }
}

let displayWeatherDay = function(dayOfWeek, description, icon, highTemp, lowTemp, humidity) {
    let out = "<div class='weatherDay'><img src='icons/" + icon + ".png'/>";
    out += "<h2>" + dayOfWeek + "</h2>";
    out += "<h3>" + description + "</h3>";
    out += "<p>High Temperature: " + highTemp + "C°</p>";
    out += "<p>Low Temperature: " + lowTemp + "C°</p>";
    out += "<p>Humidity: " + humidity + "%</p>";
    document.getElementById("forecast").innerHTML += out;
}

let getDayOfWeek = function(dayNum) {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return (weekday[dayNum]);
}

let timestampToTime = function(timeStamp) {
    let date = new Date(timeStamp * 1000);
    let hours = date.getHours();
    let minutes = "";
    if (date.getMinutes() < 10) {
        minutes = "0" + date.getMinutes();
    } else {
        minutes = date.getMinutes();
    }
    return hours + ":" + minutes;
}

navigator.geolocation.getCurrentPosition(gotPosition);