function odd_or_even(num){
    if (num % 2 ==0) {
        console.log('ეს რიცხვი არის ლუწი')
    } else {
        console.log('ეს რიცხვი არის კენტი')
    }
}

function squere_root(num) {
    console.log(num * num)
}

function is_above_0(num) {
    if (num > 0) {
        console.log(`${num} is above 0`)
    } else if (num == 0) {
        console.log(`${num} is equal to 0`)
    } else {
        console.log(`${num} is below 0`)
    }
}