const requestURL = 'https://eduardomosquera.github.io/wdd230/chamber/data/data.json';
// const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const business = jsonObject['business'];
   
    business.forEach(displayProphets);
  });


function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let businessName = document.createElement('p');
    let address = document.createElement('p');
    let birthday = document.createElement('p');
    let birthPlace = document.createElement('p');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    businessName.textContent = prophet.name;
    address.textContent = prophet.address;
    birthday.textContent = prophet.phone;
    birthPlace.textContent = prophet.website;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.address);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the businessName element
    card.appendChild(businessName);
    card.appendChild(address);
    card.appendChild(birthday);
    card.appendChild(birthPlace);
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }