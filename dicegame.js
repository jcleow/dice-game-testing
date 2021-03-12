// // import describe from 'mocha';
// import { expect } from 'chai';

// import { playGame } from '../dice.js';

// describe('Dice Game', () => {
//   it('Game starts with player one.', () => {
//     const result = playGame();
//     expect(result.player).to.equal(1);
//   });
//   it('Game rolls three dice.', () => {
//     const game = playGame();
//     expect(game.dice.length).to.equal(3);
//   });
//   it('Keeps the highest of the three dice in a running tally.', () => {
//     const game = playGame();
//     expect(game.turnScore).exists;
//     // this is for one roll
//     expect(game.turnScore).to.be.below(7);
//   });

//   it('Keeps the highest of the two dice in a running tally.', () => {
//     var game = playGame();
//     expect(game.numberOfDice).to.equal(3);

//     var game = playGame(game);
//     expect(game.numberOfDice).to.equal(2);

//     expect(game.turnScore).exists;
//   });
// });
