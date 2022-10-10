// Create a number guessing game to generate a number between the range of 1 and 2. The game should prompt users for their username.
// Set range as function parameter and prompt the player to predict the generated number between the given range. At a correct guess, the game should award the player a point and move them to stage 2 by increasing the range limit value by 1, e.g. range is from 1 and 3 for stage 2 and so on. Connect replit account to GitHub and save your program on GitHub. Ensure that your replit link is written in your GitHub repo readme file. Submit GitHub link to the saved project.
const prompt = require('prompt-sync')({sigint: true});

let level = 1;
let score = 0;
let range_limit = 2;
let foundCorrectNumber = false;

const number_to_guess = () => {
 random_Number = Math.floor(Math.random() * range_limit) + 1;
  return random_Number;
}

const game_logic = (users_number) => {
  
 let numberToGuess = number_to_guess();
  
  if (users_number === numberToGuess) {
    console.log('Congrats, you got it!');
    // foundCorrectNumber = true;
    level = level + 1 ;
    range_limit = range_limit + 1 ;
    console.log('New Level Unlocked' , level);
    console.log('Range limit has been increased to !' , range_limit);
  } else {
    console.log('Sorry, guess again!');
  }
  
}

const query_User = () => {
  users_guess = prompt("Guess what the random number will be: 1 or 2");
  users_guess = Number(users_guess);
  return users_guess;
}

const game_engine = () => {
  
  while (!foundCorrectNumber) {
    let users_choice = query_User();
    game_logic(users_choice);
     
  }
}

game_engine()


