function info_for_car() {
    let name = prompt("Enter your name: ");
    let age = prompt("Enter your age: ");
    let distance = prompt("Enter the distance from your house to your work (in km): ");
    let days_of_work = prompt("Enter how many days you work in a week: ");
    
    age = Number(age);
    distance = Number(distance);
    days_of_work = Number(days_of_work);
    if (isNaN(age) || age < 0) {
        alert("When I asked you for age, I wanted a positive number, not something else.");
        return;
    } else if (isNaN(distance) || distance < 0) {
        alert("When I asked you for distance, I wanted a positive number, not something else.");
        return;
    } else if (isNaN(days_of_work) || days_of_work < 0 || days_of_work > 7) {
        alert("When I asked you for the number of days, I wanted a number between 0 and 7.");
        return;
    }
    if (age < 16) {
        alert("You need your parent's agreement before you continue.");
        return;
    }
    if (days_of_work > 5) {
        alert(`${name}, I recommend choosing an economical vehicle like an SUV or something that won't use a lot of fuel.`);
    } else {
        if (distance < 5) {
            alert(`${name}, I think a bicycle is your best choice.`);
        } else if (distance < 20) {
            alert(`${name}, I think a car will be the best choice of vehicle.`);
        } else {
            alert(`${name}, I recommend taking the train for traveling, but a car will also work.`);
        }
    }
}
info_for_car();