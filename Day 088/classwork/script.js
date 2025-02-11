let num = 50;

while (num > 0) {
    console.log("GOA");
    num--;
}


num = 20;

while (num > -1) {
    console.log(num);
    num--;
}


num = 20;

while (num > 0) {
    if (num % 2 ==0) {
        console.log(num);
    }
    num--;
}


num = 1;

while (num < 101) {
    if (num % 5 ==0) {
        console.log(num);
    }
    num++;
}

console.log("new line")
let time = prompt("enter amount of seconds: ")
while (time > -1) {
    console.log(time);
    time--;
}