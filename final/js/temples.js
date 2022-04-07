const requestURL = 'https://eduardomosquera.github.io/wdd230/final/data/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject['temples'];
   
    temples.forEach(displayCard);
  });


function displayCard(tmp) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let templeName = document.createElement('h3');
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
    templeName.textContent = tmp.name;
    address.textContent = `Address: ${tmp.address}`;
    phoneNum.textContent = `Telephone: ${tmp.telephone}`;
    email.textContent = `Email: ${tmp.email}`;
    services.textContent = `Services: ${tmp.services}`;
    history.textContent = `History: ${tmp.history}`;
    ordinanceS.textContent = `Ordinance Schedule: ${tmp.ordinanceSchedule}`;
    sessionS.textContent = `Sessions Schedule: ${tmp.sessionSchedule}`;
    closedure.textContent = `Closedure Schedule: ${tmp.templeClosureSchedule}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', tmp.imageurl);
    portrait.setAttribute('alt', 'Logo of ' + tmp.name);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the templeName element
    card.appendChild(portrait);
    card.appendChild(templeName);
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