const assert = require('assert');
const Board = require('../lib/board.js');
const Game = require('../lib/game.js');

describe('Board', function() {

  let testBoard = new Board;
  let sigils = testBoard.sigils;
  let testSigil1 = sigils[0];
  let testSigil2 = sigils[1];
  let positions = generatePositions(testBoard);

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

    positions.forEach((pos) => {
      sigils.forEach((sigil) => {
        it(`returns true if the ${sigil} can be placed in ${pos}`, () => {
          assert(testBoard.isValidMove(pos, sigil) === true);
        });
      });
    });

    it(`returns false if pos is full`, () => {
      testBoard.grid[0][0] = testSigil1;
      assert(testBoard.isValidMove([0,0], testSigil2) === false);
    });

    it(`returns false if pos is off the board`, () => {
      assert(testBoard.isValidMove([0,4], testSigil1) === false);
    });
  });

  describe(`makeMove()`, () => {

    it(`places the sigil at a valid position`, () => {
      testBoard.makeMove([0,0], testSigil1)
      assert(testBoard.grid[0][0] === testSigil1);
    });

    it('does not allow a sigil to overwrite another', ()=> {
      testBoard.makeMove([0,0], testSigil1);
      testBoard.makeMove([0,0], testSigil2);
      assert(testBoard.grid[0][0] === testSigil1);
    });

  });

  describe(`isOver()`, () => {

    it(`is true when the board is full`, () => {
      positions.forEach(function(pos) {
        testBoard.grid[pos[0]][pos[1]] = testSigil2;
      });
      assert(testBoard.isOver() === true);
    });

    it(`is true when there are spaces remaining and there is a winner`, () => {
      testBoard.grid[0][0] = testSigil1;
      testBoard.grid[0][1] = testSigil1;
      testBoard.grid[0][2] = testSigil1;
      assert(testBoard.isOver() === true);
    });

    it(`is false at the start of the game`, () => {
      assert(testBoard.isOver() === false);
    })

    it(`is false when there are spaces remaining with no winner`, () => {
      testBoard.grid[0][0] = testSigil1;
      testBoard.grid[0][1] = testSigil2;
      testBoard.grid[0][2] = testSigil1;
      assert(testBoard.isOver() === false);
    });
  });

  describe(`hasSpace()`, () => {

    it(`returns true when the board is empty`, () => {
      assert(testBoard.hasSpace() === true);
    });

    it(`returns true when there is at least one space on the board`, () => {
      positions.forEach((pos, idx) => {
        if(idx !== 0) {
          testBoard.grid[pos[0]][pos[1]] = testSigil1;
        }
      });
      assert(testBoard.hasSpace() === true);
    });

    it(`returns false when there is no space on the board`, () => {
      positions.forEach((pos) => {
        testBoard.grid[pos[0]][pos[1]] = testSigil1;
      });
      assert(testBoard.hasSpace() === false);
    });
  })

  describe(`detectWinner()`, () => {

    sigils.forEach((sigil) => {
      testBoard.winningSets.forEach((coordinatesArray) => {
        it(`returns the ${sigil} when ${sigil}s fill ${coordinatesArray.toString()}`, () => {
          coordinatesArray.forEach((coordinates) => {
            testBoard.grid[coordinates[0]][coordinates[1]] = sigil;
          });
          assert(testBoard.detectWinner() === sigil);
        });
      });
    });

    it(`should return false when there is no winner`, () => {
      assert(testBoard.detectWinner() === false);
    });
  });

});
