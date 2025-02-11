function treaning() {
    let name = prompt("Enter your name: ");
    let age = prompt("Enter your age: ");
    let distance = prompt("Enter the distance which you train in km: ");
    let days_of_treaning = prompt("Enter how many days do you train in a week: ");
    
    age = Number(age);
    distance = Number(distance);
    days_of_treaning = Number(days_of_treaning);
    if (isNaN(age) || age < 0) {
        alert("When I asked you for age, I wanted a positive number, not something else.");
        return;
    } else if (isNaN(distance) || distance < 0) {
        alert("When I asked you for distance, I wanted a positive number, not something else.");
        return;
    } else if (isNaN(days_of_treaning) || days_of_treaning < 0 || days_of_treaning > 7) {
        alert("When I asked you for the number of days, I wanted a number between 0 and 7.");
        return;
    }
    if (age < 16 || age > 60) {
        alert("I will reccomend to check the doctor for answer");
        return;
    }
    let sum = days_of_treaning * distance;
    if (sum < 20) {
        alert("A bit more treaning wouldn't hurt");
    } else {
        alert(`${sum} is a normal distance for treaning keep up the good work`);
    }
}
treaning();