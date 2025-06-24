let btn = document.querySelector("button");
let img = document.querySelector("img");

btn.addEventListener("click", () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      img.src = data[0].url;
    })
    .catch((error) => {
      console.error(error);
    });
});
