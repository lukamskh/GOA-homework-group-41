let num = 1;

for (let i = 1; i <= 10000; i++) { 
    num *= i;
        if (num > 10000) {
        break;
    }
    console.log(num);
}