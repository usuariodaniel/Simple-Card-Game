const deck = [];
let option = "";

do {
  option = prompt(
    "Cards in the Deck: " +
      deck.length +
      "\n1. Add a card\n2. Draw a card\n3. Exit"
  );

  switch (option) {
    case "1":
      const newCard = prompt("What is the new Card?");
      deck.push(newCard);
      break;
    case "2":
      const pullCard = deck.pop();
      if (!pullCard) {
        alert("There are no cards in the deck");
      } else {
        alert("You pulled a " + pullCard);
      }
      break;
    case "3":
      alert("Exiting...");
      break;
    default:
      alert("Invalid Option");
  }
} while (option !== "3");
