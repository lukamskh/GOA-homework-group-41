let div = document.querySelector("div");

fetch("https://ipapi.co/json/")
  .then((response) => response.json())
  .then((data) => {
    div.innerHTML = `<p>IP: ${data.ip}</p>`;
    div.innerHTML += `<p>City: ${data.city}</p>`;
    div.innerHTML += `<p>Region: ${data.region}</p>`;
    div.innerHTML += `<p>Country: ${data.country_name}</p>`;
    div.innerHTML += `<p>Latitude: ${data.latitude}</p>`;
    div.innerHTML += `<p>Longitude: ${data.longitude}</p>`;
  })
  .catch((error) => {
    console.error(error);
  });
