class Board {
  constructor() {
    this.grid = Array(3).fill("").map(function(el) {
      return Array(3).fill(undefined);
    });

  }

  isValidMove(pos, sigil) {
    //checks to see if a move can go here
    if(pos[0] > 2 || pos[0] < 0 || pos[1] > 2 || pos[1] < 0) return false;

    if(this.getItemAtPos(pos) === undefined) {
      return true;
    }
    return false;
  }

  getItemAtPos(pos) {
    return this.grid[pos[0]][pos[1]];
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
