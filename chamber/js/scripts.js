const d = new Date();
let year = d.getFullYear();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let day = weekday[d.getDay()];
let monthname = month[d.getMonth()];

document.querySelector(".currentyear").textContent += `\u00A9 ${year} Daule Chamber of Commerce`;
 
function toggleMenu(){
  document.getElementById("menu").classList.toggle("open");
  document.getElementById("hamBtn").classList.toggle("open");
}

const x = document.getElementById("hamBtn");
x.onclick = toggleMenu;