
let num1 = prompt("enter num1: ");
num1 = Number(num1)
let num2 = prompt("enter num2: ");
num2 = Number(num2)
if (num2 > num1) {
    console.log(`name: ${num2} is bigger than ${num1}`);
} else if (num1 > num2) {
    onsole.log(`name:${num1} is bigger than ${num2}`);
} else {
    console.log("they are same length");
}

let str = "some random text";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let currentYear  = 2024;
let age = prompt("enter your age: ");
console.log(`you were born in ${currentYear  - age}`);

let num3 = prompt("enter num3: ");
num3 = Number(num3)
console.log((num1 + num2 + num3) / 3)
alert((num1 + num2 + num3) / 3);