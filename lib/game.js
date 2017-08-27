//const readline = require('readline');
const Board = require('./board.js');

let reader;

class Game {
  constructor() {
    this.board = new Board;
    this.sigils = this.board.sigils;
    this.currentSigil = this.sigils[0];
  }

  swapSigil() {
    this.currentSigil = this.currentSigil === this.sigils[0] ? this.sigils[1] :this.sigils[0];
  }

  play() {
    reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });

    this.run(function () {
      reader.close();
      reader = null;
    });
  }

  run(endCallback) {
    if(this.board.detectWinner()) {
      this.board.print();
      console.log(`Looks like ${this.board.detectWinner()} won!`);
      endCallback();
    } else {
      this.promptMove(this.run.bind(this, endCallback));
    }
  }

  promptMove(callBack) {
    this.board.print();

    reader.question(`Where would you like to move ${this.currentSigil}?`,(answer) => {
      const pos = [Number(answer[0]),Number(answer[1])];

      if(!this.board.isValidMove(pos, this.currentSigil)) {
        this.promptMove(callBack);
        return;
      }

      this.board.makeMove(pos, this.currentSigil);
      this.swapSigil();
      callBack();
    });
  }
}

module.exports = Game;
