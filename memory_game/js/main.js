const cards = ["queen", "queen", "king", "king"]

const cardsInPlay = []
let cardOne = cards[2];
cardsInPlay.push(cardOne);

console.log("User Flipped " + cardOne);

let cardTwo = cards[3];
cardsInPlay.push(cardTwo);

console.log("User Flipped " + cardTwo);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	result = alert("You found a match!");
} else if (cardsInPlay.length ===2 && cardsInPlay[0] !== cardsInPlay[1]) {
	result = alert("Sorry, try again.");
}
