const readline = require('readline');
const Board = require('./board.js');

class Game {
  constructor() {
    this.board = new Board;
  }

  play() {
    this.board.print();
  }
}

module.exports = Game;
