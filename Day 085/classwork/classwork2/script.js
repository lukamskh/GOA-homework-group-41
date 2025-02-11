let choice = prompt("pick between americano = 1, espresso = 2 , cappucino = 3");
switch (choice) {
    case "1" :
        alert("americano");
        break;
    case "2" :
        alert(`espresso`);
        break;
    case "3" :
        alert(`cappucino`);
        break;
    default: alert(`wasnt found`)
}