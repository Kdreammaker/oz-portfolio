const MAX_STARS = 10;
let userInput;
var currentCount;

function printStars(count = 1) {
    if (count <= 0) {
        count = 1;
    }
    let stars = "";
    for (let i = 0; i < count; i++) {
        stars += "*";
    }
    console.log(stars);
}

while (true) {
    userInput = prompt("Enter the number of stars (1-10):");

    if (userInput === null) {
        break;
    }

    currentCount = Number(userInput);

    if (!isNaN(currentCount) && currentCount >= 1 && currentCount <= MAX_STARS) {
        printStars(currentCount);
        break;
    } else {
        console.log("Invalid input! Enter a number between 1 and 10.");
        continue;
    }
}