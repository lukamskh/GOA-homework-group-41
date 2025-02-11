let num1 = prompt("enter num1: ");
let num2 = prompt("enter num2: ");
let choice = prompt("please enter +, -, /, or *: ");

if (num1 === "" || num2 === "" || choice === "" ) {
    alert("please enter all information");
} else {
    num1 = Number(num1);
    num2 = Number(num2);

    if (choice === "+") {
        result = num1 + num2;
    } else if (choice === "-") {
        result = num1 - num2;
    } else if (choice === "*") {
        result = num1 * num2;
    } else if (choice === "/") {
        if (num2 === 0 || num1 === 0) {
            alert("cannot divide");
        } else {
            result = num1 / num2;
        }
    } else {
        alert("doesn't work");
    }
    alert(`answer: ${result}`);
}