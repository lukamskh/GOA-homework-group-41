let div = document.querySelector("div");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      div.innerHTML = `<p>Setup: ${data.setup}</p>`;
      div.innerHTML += `<p>Punchline: ${data.punchline}</p>`;
    })
    .catch((error) => {
      console.error(error);
    });
});
