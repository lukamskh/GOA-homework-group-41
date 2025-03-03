// innerHtml გვეხმარება რომ DOM-ის საშუალებით შევქმნათ ახალი მონაცემი როგორებიცაა <p> <h1> <button> და ა.შ. როდესაც innerText ცვლის მხოლლოდ <p> <h1> და ა.შ. ის ტექქსტს

let div1 = document.getElementById("Num1");
let p2 = document.getElementsByClassName("Num2")[0];
let p3 = document.getElementsByTagName("p")[2];

div1.innerHTML = "<p>Holla</p>";
p2.innerText = "luka";
p3.style.color = "green";
