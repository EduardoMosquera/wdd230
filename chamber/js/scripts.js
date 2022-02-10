// Today's date
const datefieldUK = document.querySelector("aside");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

//-------------------------------------------------------------------------
// Hamburguer Menu
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 960) mainnav.classList.remove('responsive')};
//-------------------------------------------------------------------------


// Banner
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = weekday[now.getDay()];

// function toggleBanner(){
  


// if (now.getDay() == 2) {
//   toggleBanner();
// }
function toggleBanner(){
  var x = document.getElementById("banner");

  if (now.getDay() === 2) {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}