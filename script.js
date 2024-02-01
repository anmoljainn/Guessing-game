alert("Click ok for start the game :");
const max = prompt("Enter the max number :");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number :");

while (true) {
    if (guess == "quit") {
        alert("You quit the game , try again");
        break;

    }

    if (guess == random) {
        alert("You guess the right number! congrats!!  ");
        break;
    } else if (guess < random) {
        guess = prompt("Hint : your guess was too small. Please try again. (Note : Type quit for exit the game)");
    } else {
        guess = prompt("Hint : your guess was too large. Please try again. (Note : Type quit for exit the game)");
    }
}