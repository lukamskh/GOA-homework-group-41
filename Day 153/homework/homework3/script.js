let btn = document.querySelector("button");
let input = document.querySelector("input");
let div = document.querySelector("div");

btn.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users/" + input.value)
    .then((response) => response.json())
    .then((data) => {
      div.innerHTML = `
        <h2>${data.name}</h2>
        <p>Email: ${data.email}</p>
        <p>City: ${data.address.city}</p>
      `;
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
});
