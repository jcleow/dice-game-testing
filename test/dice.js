import { expect } from 'chai';
import playGame from '../dice.js';

// describe('Ensure Two Players', () => {
//   const result = playGame();
//   console.log(result.message);
//   expect();
// });

describe('A player won with 11 points', () => {
  it('player one wins with 11 points', () => {
    const gameState = {
      p1Points: 11,
      p2Points: 0,
      currentPlayerTurn: 0,
      pointNum: 11,
    };
    const result = playGame(gameState);
    expect(result.message).to.equal('p1 won');
  });
});
