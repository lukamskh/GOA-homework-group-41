let btn = document.querySelector("button");
let div = document.querySelector("div");
let input = document.querySelector("input");

btn.addEventListener("click", () => {
  fetch("https://api.agify.io/?name=" + input.value)
    .then((response) => response.json())
    .then((data) => {
      div.innerHTML = "Estimated age: " + data.age;
    })
    .catch((error) => {
      console.error(error);
    });
});
