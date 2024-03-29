<p align="center">
  <img src="./public/game-logo.png" alt="Game Logo" width="200">
</p>

# Tic Tac Toe
Welcome to the Tic Tac Toe game app! 
This is a simple implementation of the Tic Tac Toe game built with React and Vite.

## Live Demo

You can play the game online [here](https://2exp3.github.io/tic-tac-toe/) :joystick:

## Features

- Editable player names
- Keeps track of the game log
- Displays the current player's turn
- Announces the winner or a tie game

## Components

The app is divided into the following components:

1. `GameBoard.jsx`: Renders the game board and handles game logic.
2. `GameOver.jsx`: Displays the game over message and offers a restart option.
3. `Log.jsx`: Keeps track of the game log and displays it.
4. `Player.jsx`: Handles name edit and displays the current player's turn.

Game states (active player, current game board, winner) are derived from `gameTurns` to minimize `useState` calls.

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository:

``` bash
git clone https://github.com/2exp3/tic-tac-toe.git
```
2. Navigate to the project directory:

``` bash
cd tic-tac-toe
```
3. Install dependencies:

``` bash
npm install
```
4. Start the development server:

``` bash
npm run dev
```
5. Open your browser and visit `http://localhost:5173` to see the app running.

## Building for Production

To build the app for production, run:
``` bash
npm run build
```
This will create an optimized build in the `dist` directory.

## Deployment

The app is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. 
You can find the deployed version [here](https://2exp3.github.io/tic-tac-toe/) :rocket:

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
