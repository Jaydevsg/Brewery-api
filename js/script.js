
document.body.innerHTML = `<div class="heading-container">
<h1>Brewery List</h1>
<img class="icon" src="https://www.tripsavvy.com/thmb/s9Av4tbO8NK1W1ZqLrGgGTD6fzg=/6115x4076/filters:fill(auto,1)/GettyImages-985246356-2926a5ecae584f8596ba5ec53bfd4732.jpg" height="100px" alt="icon">
</div>
<div id="mainContainer" class="main-container"></div>
`;

const getData = async () => {
  try {
    const data = await fetch("https://api.openbrewerydb.org/breweries");
    const brewerys = await data.json();

    mainContainer.innerHTML = "";
    brewerys.forEach((brewery) => {
      displayData(brewery);
    });
  } catch (error) {
    console.log(error);
  }
};

getData();

const displayData = (obj) => {
  mainContainer.innerHTML += `
<div class="container">
<h3 class="blue">Brewery City:<span>${obj.city}</span></h3>
<p class="para blue"> Brewery Type:<span>${obj.brewery_type}</span></p>
<p class="para blue"> Brewery Phone:<span>${obj.phone}</span></p>
<p class="para blue"> Brewery Website:<span>${obj.website_url}</span></p>
<p class="para blue"> Brewery Address:<span>${obj.street}</span></p>
<p class="para blue"> Brewery State:<span>${obj.state}</span></p>
<p class="para blue"> Brewery Zip:<span>${obj.postal_code}</span></p>
<p class="para blue"> Brewery Country:<span>${obj.country}</span></p>
</div>`;
};
