let btn = document.querySelector("button");
let img = document.querySelector("img");

btn.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      img.src = data.message;
    })
    .catch((error) => {
      console.error(error);
    });
});
