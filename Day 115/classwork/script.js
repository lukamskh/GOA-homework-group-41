let num = 0;
let img = document.querySelector("img");
const list = ["smth1.png", "smth2.png", "smth3.png"];

function forward() {
  num++;
  if (num >= list.length) {
    num = 0;
  }
  img.src = list[num];
}

function backward() {
  num--;
  if (num < 0) {
    num = list.length - 1;
  }
  img.src = list[num];
}
