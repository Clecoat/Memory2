import { isOdd, getRandomColour, shuffle } from './GenericUtils';

export function generateTileMatches (size, types) {
  // make a copy of the arguments so we can change them safely
  let _types = types;
  let _size = size;

  // if the board size doesnt allow an even number of types
  // reduce the number of types so every type has a match
  if(isOdd(size/types)) {
    _types -= 1;
  }

  // work out how many of each type we need to fill the game board
  const matchCount = _size/_types;

  // array to track how many tiles we have for each type
  let targetMatches = [];

  // while we still have types to process
  while(_types > 0) {
    // add the new element that has the matchCount property indicating how many matches this type requires
    // to the targetMatches array
    targetMatches.push({ matchCount });
    // remove this type from the types we are working on
    _types -= 1;
  } // once we run out of types by the value reducing by 1, exit the while loop

  // create an array to store our new game tile objects that has the size of the gameboard
  let gameBoard = [];

  // this will make a data object to represent our tiles state
  const tileData = colour => ({
    colour,
    revealed: false,
    matched: false
  });

  targetMatches.forEach(t => {
    const colour = getRandomColour(); // gets a random colour
    while(t.matchCount > 0) { // while we need to add more instances of this type
      const tile = tileData(colour); // create a new tile data object
      gameBoard.push(tile); // add the new tile to the gameBoard
      t.matchCount -= 1; // decrease the number we need
    }
  });

  return shuffle(gameBoard); // shuffle the gameboard and return it
}