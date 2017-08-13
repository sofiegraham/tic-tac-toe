const assert = require('assert');
const Board = require('../lib/board.js');
const Game = require('../lib/game.js');

/*
game takes input from player(or AI)



*/


describe('Board', function() {
  /*
  board should be viewable in the terminal
  should say if a move is valid(pos)
  should make a move
  should check for win



  */

  let testBoard;
  let positions = generatePositions(new Board());
  let sigils = ["X", "O"];

  function generatePositions(board) {
    const positionIdxs = [];
    board.grid.forEach((arr ,idxY) => {
      arr.forEach((el, idxX) => {
        positionIdxs.push([idxX,idxY]);
      });
    });
    return positionIdxs;
  }

  beforeEach(() => {
    testBoard = new Board;
  });

  describe('constructor()', () => {

    it('is initialized to a 3 x 3 array', () => {
      assert(testBoard.grid.length === 3);
      assert(testBoard.grid[0].length === 3);
      assert(testBoard.grid[1].length === 3);
      assert(testBoard.grid[2].length === 3);
    });

    it('is empty at the start of the game', () => {
      function checkEmpty(arr) {
        return arr.every(function(el) {
          return el === undefined;
        })
      }
      assert(checkEmpty(testBoard.grid[0]) === true);
      assert(checkEmpty(testBoard.grid[1]) === true);
      assert(checkEmpty(testBoard.grid[2]) === true);
    });
  });

  describe(`isValidMove()`, () => {

    positions.forEach(function(pos) {
      sigils.forEach(function(sigil) {
        it(`returns true if the ${sigil} can be placed in ${pos}`, () => {
          assert(testBoard.isValidMove(pos, sigil) === true);
        });
      });
    });

    it(`returns false if pos is full`, () => {
      testBoard.grid[0][0] = `O`;
      assert(testBoard.isValidMove([0,0], "X") === false);
    });

    it(`returns false if pos is off the board`, () => {
      assert(testBoard.isValidMove([0,4], "X") === false);
    });
  });

  describe(`makeMove()`, () => {

    it(`places the sigil at a valid position`, () => {
      testBoard.makeMove([0,0], "X")
      assert(testBoard.grid[0][0] === "X");
    });

    it('does not allow a sigil to overwrite another', ()=> {
      testBoard.makeMove([0,0], "X");
      testBoard.makeMove([0,0], "0");
      assert(testBoard.grid[0][0] === "X");
    });

  });



});
