# Simple Card Game

This project is a simple card game simulation built with `JavaScript`. It uses an array to represent a deck of cards and provides the user with options to add a card to the deck, draw a card from the deck, or exit the game.

## Features

- Add a card to the deck
- Draw a card from the deck
- Exit the game

## How to Play

1. The game will prompt you to choose an option:
   - "1. Add a card": Add a new card to the deck.
   - "2. Draw a card": Draw a card from the deck. If there are no cards in the deck, it will alert you that there are no cards in the deck.
   - "3. Exit": Exit the game.
2. If you choose an invalid option, it will alert you that your choice was invalid.
3. The game will continue to prompt you for input until you choose to exit the game.

## Code Explanation

The game uses a `do...while` loop to prompt the user for input until they choose to exit the game. It uses a `switch` statement to handle the user's choice.

- If the user chooses "1", another prompt function is used to ask the user what the new card is. This new card is then added to the deck array using the `push` method.
- If the user chooses "2", the `pop` method is used to remove the last card from the deck array. If there are no cards in the deck, an alert is shown to the user. Otherwise, an alert is shown to the user with the card they drew.
- If the user chooses "3", an alert is shown to the user indicating that they are exiting the game.
- If the user enters anything other than "1", "2", or "3", an alert is shown to the user indicating that their choice was invalid.

## Usage

1. Open the `deck.html` file in your web browser.
2. Follow the prompts to register a property or view registered properties.

---

## Contributing

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

1. Fork this repository.
2. Create a branch with a descriptive name for your change.
3. Make your changes to the created branch.
4. Submit a pull request to the master branch of this repository.

---

## Contact

If you have any questions or suggestions, please contact me via my email or my GitHub profile.

---

## Thanks

This project was made possible thanks to the support and guidance of OneBitCode

---

## References

This project was inspired by a OneBitCode challenge
