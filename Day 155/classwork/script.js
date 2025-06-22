let h1 = document.querySelector("h1");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  fetch("https://api.kanye.rest/")
    .then((qoute) => qoute.json())
    .then((data) => {
      h1.innerHTML = data.quote;
    });
});
