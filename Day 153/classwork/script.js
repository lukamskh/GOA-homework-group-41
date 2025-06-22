
let city = document.querySelector("input").value;
let button = document.querySelector("button");
let weather = document.querySelector("div");
button.addEventListener("click", function() {
    city = document.querySelector("input").value;
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=b267c0add690d4d5d51b2e499de2039c")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            weather.innerHTML = "City: " + city + ";   ";
            weather.innerHTML += "Temperature: " + data.main.temp + "°C";
        });
});