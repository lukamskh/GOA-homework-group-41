
function password_game() {
    let password = 'Group 41 is best';
    let attempts = 0;
    const maxAttempts = 3;
    while (attempts < maxAttempts) {
        let attempt = prompt(`Enter password: `);
        if (attempt === password) {
            alert('თქვენი შეყვანილი პაროლი სწორია');
            return;
        } else {
            attempts++;
            if (attempts === maxAttempts) {
                alert('თქვენ ამოგეწურათ ცდების რაოდენობა');
            }
        }
    }
}
password_game();

while (i > -1) {
    console.log(i);
    i--;
}