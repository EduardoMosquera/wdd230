const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const monthName = months[d.getMonth()];
const dayName = daynames[d.getDay()];
const year = d.getFullYear();
//const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
const fulldate = `${monthName} ${d.getDate()}, ${year}`;
// using getElementById
document.getElementById("currentdate").textContent = fulldate;
// ****************************
// using querySelector
const date2 = document.querySelector('#currentdate2');

try {
  const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
  date2.textContent = new Date().toLocaleDateString('en-UK', options);
} catch (e) {
  alert('Error with code or your browser does not support Locale');
}
 
function toggleMenu(){
  document.getElementById("menu").classList.toggle("open");
  document.getElementById("hamBtn").classList.toggle("open");
}

const x = document.getElementById("hamBtn");
x.onclick = toggleMenu;