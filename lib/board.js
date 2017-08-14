const clear = require('clear');

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
    if(this.detectWinner() !== false) {
      return true;
    } else {
      return !this.hasSpace();
    }
  }

  hasSpace() {
    return this.grid.some((arr) => {
      return arr.some((el) => {
        return el === undefined;
      });
    });
  }

  detectWinner() {
    //returns sigil of winner or false
    let winner = false;

    this.winningSets.forEach((coordinateArray) => {
      let target = this.getItemAtPos(coordinateArray[0]);
      if(target !== undefined) {
        let isWinner = coordinateArray.every((pos) => {
          return this.getItemAtPos(pos) === target;
        });
        if(isWinner) winner = target;
      }
    });
    return winner;
  }

  print() {
    //prints the board
    clear();
    const printable = this.grid.map((arr) => {
      return arr.map((el) => {
        return el === undefined ? `□` : el;
      }).join(" ");
    }).join("\n");

    console.log(printable);
  }

}

module.exports = Board;
