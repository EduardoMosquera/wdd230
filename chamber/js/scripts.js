// Today's date
const datefieldUK = document.querySelector("aside");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

// Hamburguer Menu
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 960) mainnav.classList.remove('responsive')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */

// Banner
let d = new Date();

let isCorrectDay = d.getDay() == 2; 

if(isCorrectDay) $(".banner").show();
else $(".banner").hide();

// Weather
const weatherIcon = document.querySelector(".wIcon")
const iconDesc = document.querySelector(".iconDesc")
const localtemp = document.querySelector(".temp")
const wSpeed = document.querySelector(".windSpeed")
const wChill = document.querySelector(".windChill")


async function getWeather() {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Shoshone,ID,USA&units=imperial&APPID=da28ef0488cf8a1538d20c2db5897dd8");
    let data = await response.json()

    let newTemp = data['main']['temp']
    let icon = data['weather'][0]['icon'];
    let desc = data['weather'][0]['description'];
    let speed = data['wind']['speed']

    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.alt = `open weather map API icon: ${desc}`;
    iconDesc.textContent = desc.toUpperCase()

    currentTemp = Math.round(newTemp)
    localtemp.textContent += `${currentTemp}`;

    currentspeed = Math.round(speed)
    wSpeed.textContent = `${currentspeed} mph`

    if (newTemp <= 50 && speed > 3.0) {
        let chill = 35.74 + (0.6215*newTemp) - (35.75*speed**0.16) + (0.4275*newTemp*speed**0.16)
        chill = Math.round(chill)
        wChill.textContent = `Feels like ${chill}`
    }else {
        console.log('variable out of range')
    }
    return data
    }
    
let weatherData = getWeather();

console.log(weatherData)
