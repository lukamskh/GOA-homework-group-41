let button = document.querySelector("button");
let weather = document.querySelector("div");
let input = document.querySelector("input");
let img = document.querySelector("img");

button.addEventListener("click", () => {
  let pokemonName = input.value;
  fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      weather.innerHTML = "Name: " + data.name + ";   ";
      weather.innerHTML += "Height: " + data.height + ";   ";
      weather.innerHTML += "Weight: " + data.weight + ";   ";
      img.src = data.sprites.front_default;
    });
});
