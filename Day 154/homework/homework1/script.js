let btn = document.querySelector("button");
let input = document.querySelector("input");
let div = document.querySelector("div");

btn.addEventListener("click", function () {
  fetch("http://numbersapi.com/" + input.value)
    .then((Response) => Response.text())
    .then((data) => {
      div.innerHTML = `<p>${data}</p>`;
    })
    .catch((error) => {
      console.error(error);
    });
});
