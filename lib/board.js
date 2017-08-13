class Board {
  constructor() {
    this.grid = Array(3).map(function(el) {
      return Array(3).fill(undefined);
    });
  }

  isValidMove(pos) {
    //checks to see if a move can go here
  }

  makeMove(pos, sigil) {
    //if move is valid, places sigil
  }

  isOver() {
    //checks if game is over (won/full)
  }

  detectWinner() {
    //returns sigil of winner or false
  }

  print() {
    //prints the board
  }


}

module.exports = Board;
