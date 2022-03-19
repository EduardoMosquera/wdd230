// Select elements
const weatherIcon = document.querySelector(".weatherIcon")
const description = document.querySelector(".description")
const temperature = document.querySelector(".temp")
const windSpeed = document.querySelector(".windSpeed")
const windChill = document.querySelector(".windChill")

// Get weather from API
async function getWeather() {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Daule,EC&units=metric&APPID=2996130d56f9a2e4c8f6a515f56da672");
    let data = await response.json()

    let Temp = data['main']['temp']
    let iconId = data['weather'][0]['icon'];
    let weatherDesc = data['weather'][0]['description'];
    let speed = data['wind']['speed']
    let chill = data['main']['feels_like']

    //Display weather to UI
    weatherIcon.innerHTML = `<img src="icons/${iconId}.png"/>`;

    description.textContent = weatherDesc.toUpperCase()

    roundTemp = Math.round(Temp)
    temperature.textContent += `${roundTemp}`;

    windSpeed.textContent = `${speed} kph`;

    let wchill = 35.74+0.6215*Temp-35.75*(windSpeed**0.16)+0.4275*Temp*(windSpeed**(0.16));
    if (Temp > 10 || windSpeed < 4.8) {
        windChill.textContent = "N/A";
    }
    else {
        var strChill = wchill.toFixed(0) + "º C";
        windChill.textContent = strChill;
    }
    }
getWeather();
