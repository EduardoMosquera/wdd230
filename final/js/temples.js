const requestURL = 'https://eduardomosquera.github.io/wdd230/final/data/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const business = jsonObject['temples'];
   
    business.forEach(displayCard);
  });


function displayCard(tmp) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let businessName = document.createElement('h3');
    let address = document.createElement('p');
    let phoneNum = document.createElement('p');
    let email = document.createElement('p');
    let services = document.createElement('p');
    let history = document.createElement('p');
    let ordinanceS = document.createElement('p');
    let sessionS = document.createElement('p');
    let closedure = document.createElement('p');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the tmp's full name
    businessName.textContent = tmp.name;
    address.textContent = tmp.address;
    phoneNum.textContent = tmp.phone;
    email.textContent = tmp.email;
    services.textContent = tmp.services;
    history.textContent = tmp.history;
    ordinanceS.textContent = tmp.ordinanceSchedule;
    sessionS = textContent = tmp.sessionSchedule;
    closedure = textContent = tmp.templeClosureSchedule;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', tmp.imageurl);
    portrait.setAttribute('alt', 'Logo of ' + tmp.name);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the businessName element
    card.appendChild(portrait);
    card.appendChild(businessName);
    card.appendChild(address);
    card.appendChild(phoneNum);
    card.appendChild(email);
    card.appendChild(services);
    card.appendChild(history);
    card.appendChild(ordinanceS);
    card.appendChild(sessionS);
    card.appendChild(closedure);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('#cards').appendChild(card);
  }