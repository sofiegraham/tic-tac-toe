const Board = require('./board.js');

class Game {
  constructor() {
    this.board = new Board;
    this.sigils = this.board.sigils;
    this.currentSigil = this.sigils[0];
  }

  swapSigil() {
    this.currentSigil = this.currentSigil === this.sigils[0] ? this.sigils[1] :this.sigils[0];
  }

  run() {
    if(this.board.isOver()) {
      const winner = this.board.detectWinner();
      if(winner) {
        $('#hint').text(`Looks like ${this.board.detectWinner()} won!`);
      } else {
        $('#hint').text(`Looks like it's a tie!`);
      }
      $('.square').removeClass('empty');
      $('.square').off('click');
    } else {
      $('#hint').text(`Where would you like to move ${this.currentSigil}?`);
    }
  }

  move(pos, $square) {
    if(!this.board.isValidMove(pos, this.currentSigil)) {
      alert("invalid move");
      return;
    }
    this.board.makeMove(pos, this.currentSigil);
    $square.text(this.currentSigil);
    $square.addClass('full');
    $square.removeClass('empty');
    this.swapSigil();
    this.run();
  }
}

module.exports = Game;
