let num = 0;
for (let i = 0; i < 11; i++) {
    num = i + num
    console.log(num + i);
}

for (let i = 0; i < 11; i++) {
    console.log(i * i);
}

let word = "Hello world";
for (let i = 0; i < 11; i++) {
    console.log(word[i]);
}

let num1 = prompt("type num: ");
if (num1 / 5){
    console.log(`Buzz`);
} else if (num1 / 3) {
    console.log(`Fizz`);
} else {
    console.log(`FizzBuzz`);
}