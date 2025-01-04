let num = prompt("enter num: ");
num = Number(num);
if (num % 2 == 0) {
    alert("its even");
} else {
    alert(`its odd`);
}

let temp = prompt(`enter temperature in celcious: `);
temp = Number(temp);
if (temp > 36) {
    alert(`temperature is warm`);
} else if (temp < 36) {
   alert("it's cold outside");
} else {
    alert(`36 degrees if fine you won't melt`);
}

let score = prompt("enter your score: ");
score = Number(score);
if (score >= 90 && score <= 100) {
    return 'A';
} else if (score >= 80 && score < 90) {
    return 'B';
} else if (score >= 70 && score < 80) {
    return 'C';
} else if (score >= 60 && score < 70) {
    return 'D';
} else if (score >= 0 && score < 60) {
    return 'F';
} else {
    return 'failiure';
}
