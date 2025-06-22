let btn = document.querySelector("button");
let div = document.querySelector("div");
let input = document.querySelector("input");

btn.addEventListener("click", () => {
  fetch("https://www.omdbapi.com/?apikey=thewdb&t=" + input.value)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        div.innerHTML = `<p>Title: ${data.Title}</p>`;
        div.innerHTML += `<p>Year: ${data.Year}</p>`;
        div.innerHTML += `<img src="${data.Poster}" alt="Poster of ${data.Title}" style="width: 100px; height: auto;">`;
      } else {
        div.innerHTML = `<p>Movie not found!</p>`;
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
