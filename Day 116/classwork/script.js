const input = document.querySelectorAll("input");

function check() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message");

  for (let i = 0; i < input.length; i++) {
    if (input[i].value == "") {
      document.querySelector("body").style.backgroundColor = "red";
      message.style.color = "white";
      message.innerText = "Warning";
      return;
    }
  }

  if (password == confirmPassword) {
    document.querySelector("body").style.backgroundColor = "green";
  } else {
    document.querySelector("body").style.backgroundColor = "red";
    message.style.color = "white";
    message.innerText = "Warning";
  }
}
