const requestURL = 'https://eduardomosquera.github.io/wdd230/chamber/data/data.json';
// const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const business = jsonObject['business'];
   
    business.forEach(displayCard);
    //Added this line
    // business.forEach(displayList);
  });


function displayCard(biz) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let businessName = document.createElement('p');
    let address = document.createElement('p');
    let phoneNum = document.createElement('p');
    let website = document.createElement('p');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the biz's full name
    businessName.textContent = biz.name;
    address.textContent = biz.address;
    phoneNum.textContent = biz.phone;
    website.textContent = biz.website;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', biz.imageurl);
    portrait.setAttribute('alt', 'Logo of ' + biz.name);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the businessName element
    card.appendChild(portrait);
    card.appendChild(businessName);
    card.appendChild(address);
    card.appendChild(phoneNum);
    card.appendChild(website);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('#cards').appendChild(card);
  }


// Get the elements with class="cards" and "lists"

// var elements = document.getElementsByClassName("cards");
// var listelement = document.getElementsByClassName("lists");

// Declare a loop variable
// var i;
// var e;

// List View
// function listView() {
//   for (i = 0; i < elements.length; i++) {
//     elements[i].style.visibility = 'hidden';
//     listelement[e].style.display = "block";
//   }
// }

// Grid View
// function gridView() {
//   for (i = 0; i < elements.length; i++) {
//     elements[i].style.width = "100%";
//     elements[i].style.visibility = 'visible';
//   }
// }

/* Optional: Add active class to the current button (highlight it) */
// var container = document.getElementById("directoryBttn");
// var btns = container.getElementsByClassName("list");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("grid");
//     current[0].className = current[0].className.replace(" grid", "");
//     this.className += " grid";
//   });
// }

// const gridBtn = document.getElementById("grid");
// gridBtn.onclick = gridView;

// const listBtn = document.getElementById("list");
// listBtn.onclick = listView;

function toggleView() {
  document.getElementById('cardviewBtn').classList.toggle("open");
  document.getElementById('listviewBtn').classList.toggle("open");
 document.getElementById('bizdir').classList.toggle("open");    
}

const lv = document.getElementById('listviewBtn');
lv.onclick = toggleView;

const c = document.getElementById('cardviewBtn');
c.onclick = toggleView;