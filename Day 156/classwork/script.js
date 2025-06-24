let btn = document.querySelector("button");
let div = document.querySelector("div");

addEventListener("click", () => {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];
      div.innerHTML = `<p>Name: ${user.name.first} ${user.name.last}</p>`;
      div.innerHTML += `<p>Email: ${user.email}</p>`;
      div.innerHTML += `<img src="${user.picture.large}" style="width: 100px; height: auto;">`;
    })
    .catch((error) => {
      console.error(error);
    });
});
