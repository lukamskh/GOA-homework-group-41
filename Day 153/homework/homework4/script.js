let input = document.querySelector("input");
let button = document.querySelector("button");
let div = document.querySelector("div");

button.addEventListener("click", () => {
  fetch("https://date.nager.at/api/v3/PublicHolidays/2024/" + input.value)
    .then((response) => response.json())
    .then((data) => {
      div.innerHTML = "";
      if (Array.isArray(data)) {
        data.forEach((holiday) => {
          div.innerHTML += `<p>${holiday.localName}</p>`;
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
