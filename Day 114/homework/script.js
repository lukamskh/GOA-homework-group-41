document.getElementById("colorButton").addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("colorDiv").style.backgroundColor = randomColor;
});

document.getElementById("imageButton").addEventListener("click", function () {
  const img = document.getElementById("image");
  img.src = img.src.includes("image1.jpg") ? "image2.jpg" : "image1.jpg";
});

document.getElementById("toggleButton").addEventListener("click", function () {
  const text = document.getElementById("text");
  text.style.display = text.style.display === "none" ? "block" : "none";
});

let count = 0;
document.getElementById("counterButton").addEventListener("click", function () {
  count++;
  document.getElementById("counter").textContent = count;
});

document.getElementById("checkButton").addEventListener("click", function () {
  const radios = document.getElementsByName("capital");
  let selectedValue;
  for (const radio of radios) {
    if (radio.checked) {
      selectedValue = radio.value;
      break;
    }
  }
  const result = document.getElementById("result");
  if (selectedValue === "Paris") {
    result.textContent = "Correct!";
  } else {
    result.textContent = "Incorrect. The correct answer is Paris.";
  }
});
