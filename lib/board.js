class Board {
  constructor() {
    this.grid = Array(3).fill("").map(function(el) {
      return Array(3).fill(undefined);
    });
    this.winningSets = [[[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]],
      [[0,0],[1,1],[2,2]],[[0,2],[1,1],[2,0]]];
    this.sigils = ["X", "O"];

  }

  isValidMove(pos, sigil) {

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
    if(this.isValidMove(pos, sigil)) {
      this.grid[pos[0]][pos[1]] = sigil;
    }
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
