import { RockPaperScissors } from './rock_paper_scissors.js';
// Elements
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const startGameButton = document.getElementById('start-game-button');
const userName = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');
const resetGameButton = document.getElementById('reset-game-button');

// instantiate the game object from the `RockPaperScissors` class.
let game;
let username;

// hide gamescreen
gameScreen.classList.add('d-none');
resetGameButton.classList.add('d-none');

// updateScoreTallyUI
function updateScoreTallyUI() {
  scoreParagraph.innerHTML = `${game.username}: ${game.score.user} v CPU: ${game.score.cpu}`;
}

// updateGameHistoryUI
function updateGameHistoryUI() {
  gameHistoryParagraph.innerHTML = ''; // Clear previous game history
  // Assuming game.gameHistoryLog is an array of history entries
  gameHistoryParagraph.innerHTML = game.gameHistoryLog.join('<br />');
}

// start-game-button EventListener
startGameButton.addEventListener('click', function (e) {
  e.preventDefault();
  username = userName.value.trim(); // Ensure there's no extra spaces
  if (!username) {
    alert("Please enter a username.");
    return;
  }
  
  game = new RockPaperScissors(username);

  welcomeScreen.classList.add('d-none');
  gameScreen.classList.remove('d-none');
  resetGameButton.classList.remove('d-none');
  updateScoreTallyUI();
  updateGameHistoryUI();
});

// go-button EventListener
goButton.addEventListener('click', function (e) {
  e.preventDefault();
  const selectedOption = userSelection.options[userSelection.selectedIndex].value;
  
  if (!selectedOption) {
    alert("Please select an option.");
    return;
  }
  
  game.play(selectedOption); // Pass the selected option to the play method
  updateScoreTallyUI();
  updateGameHistoryUI();
});

// reset-game-button
resetGameButton.addEventListener('click', function (e) {
  e.preventDefault();
  userName.value = '';
  username = ''; // Clear username
  game = new RockPaperScissors(username); // Re-initialize game with empty username

  welcomeScreen.classList.remove('d-none');
  gameScreen.classList.add('d-none');
  resetGameButton.classList.add('d-none');
  updateScoreTallyUI();
  updateGameHistoryUI();
});
