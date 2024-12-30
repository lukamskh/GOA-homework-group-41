let age = prompt("Enter your age");
age = Number(age);
if (age < 5) {
    alert(`მშობელს ამას ნუ აკითხინებ`);
} else if (age <= 12) {
    alert('შენ ხარ ბავშვი');
} else if (age <= 18) {
    alert('ხარ თინეიჯერი/მოზარდი');
} else {
    alert('შენ ხარ სრულწოვანი');
}