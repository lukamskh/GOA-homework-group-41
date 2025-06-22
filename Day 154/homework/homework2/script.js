let btn = document.querySelector("button");
let input = document.querySelector("input");
let div = document.querySelector("div");

btn.addEventListener("click", function () {
  fetch("https://restcountries.com/v3.1/name/" + input.value)
    .then((response) => response.json())
    .then((data) => {
      div.innerHTML = `<p>${data[0].name.common}</p>`;
      div.innerHTML += `<p>Capital: ${
        data[0].capital ? data[0].capital[0] : "N/A"
      }</p>`;
      div.innerHTML += `<p>Population: ${data[0].population}</p>`;
      div.innerHTML += `<p>Region: ${data[0].region}</p>`;
      div.innerHTML += `<img src="${data[0].flags.svg}" alt="Flag of ${data[0].name.common}" style="width: 100px; height: auto;">`;
    })
    .catch((error) => {
      console.error(error);
    });
});
