export const rollDice = () => {
  const randomDecimal = Math.random() * 6;
  return Math.floor(randomDecimal) + 1;
};

export default function playGame(gameState) {
  // If no game has been created before
  if (!gameState) {
    const playerArray = [[], []];
    const p1Points = 0;
    const p2Points = 0;

    playerArray.forEach((player) => {
      player.push(rollDice());
    });

    let currentPlayerTurn;
    // Store index of player's turns
    if (playerArray[0] > playerArray[1]) {
      currentPlayerTurn = 0;
    } else {
      currentPlayerTurn = 1;
    }
    const pointNum = rollDice();

    const message = 'game created';
    return {
      playerArray,
      p1Points,
      p2Points,
      currentPlayerTurn,
      pointNum,
      message,
    };
  }

  // If game has been created and started
  const {
    p1Points,
    p2Points,
    currentPlayerTurn,
    pointNum,
    message,
  } = gameState;

  let updatedGameState = { ...gameState };

  // Roll dice twice
  for (let i = 0; i < 2; i += 1) {
  // If value of dice roll is 2x of point num
    const numRolled = rollDice();
    if (numRolled === pointNum * 2) {
      if (currentPlayerTurn === 0) {
        const newP1Points = p1Points + 2;
        updatedGameState = { ...updatedGameState, p1Points: newP1Points, message: `${message} \n p1 rolled 2x of pointNum` };
      } else {
        const newP2Points = p2Points + 2;
        updatedGameState = { ...updatedGameState, p1Points: newP2Points, message: `${message} \n p2 rolled 2x of pointNum` };
      }
    }
    // If value of dice roll is 1x of point num
    else if (numRolled === pointNum) {
      if (currentPlayerTurn === 0) {
        const newP1Points = p1Points + 1;
        updatedGameState = { ...updatedGameState, p1Points: newP1Points, message: `${message} \n p1 rolled pointNum` };
      } else {
        const newP2Points = p2Points + 1;
        updatedGameState = { ...updatedGameState, p1Points: newP2Points, message: `${message} \n p2 rolled pointNum` };
      }
    } else {
      updatedGameState = { ...updatedGameState, message: `${currentPlayerTurn === 0 ? 'p1' : 'p2'} has not rolled pointNum` };
    }

    // Check if either p1 or p2 has already scored 11 points
    if (p1Points === 11 || p2Points === 11) {
      if (p1Points === 11) {
        return { ...updatedGameState, message: 'p1 won' };
      }
      return { ...updatedGameState, message: 'p2 won' };
    }
  }
  // }
  updatedGameState = {
    ...updatedGameState,
    currentPlayerTurn: currentPlayerTurn % 2 === 0 ? 1 : 0,
  };
  return updatedGameState;
}

// Create the game
let newGameState = playGame();
console.log(newGameState.message);

// Will not run if player 1 or 2 has become 11
while (newGameState.p1Points !== 11 && newGameState.p2Points !== 11) {
  newGameState = playGame({ ...newGameState, message: '' });
  console.log(newGameState.message);
}

// Will run when player 1 or 2 has become 11
console.log(playGame(newGameState).message);
