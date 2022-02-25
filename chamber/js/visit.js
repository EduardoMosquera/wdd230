// initialize display elements
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
let dateVisited = Number(window.localStorage.getItem("last-visit"));


dateVisited = new Date();

// increment the number of visits.
todayDate = new Date - dateVisited;
// store the new number of visits value
localStorage.setItem("last-visit", dateVisited);

// show todays date.
lastVisit = Date.now()

debugger
let days = Math.round(Date.now() - lastVisit);
visitsDisplay.textContent = days;