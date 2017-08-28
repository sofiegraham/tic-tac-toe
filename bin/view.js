class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('.square').on('click', (event) => {
      this.makeMove($(event.currentTarget));
    });
  }

  makeMove($square) {
    const pos = $square.data("pos");
    this.game.move(pos, $square);
  }

  setupBoard() {
    this.$el.append('<div id="board" ></div>');
    this.game.board.grid.forEach((arr, aIdx) => {
      arr.forEach((el, elIdx)=> {
        const newSquare = $('<div class="square empty" id="' + [aIdx,elIdx] + '"></div>');
        newSquare.data("pos", [aIdx,elIdx]);
        $('#board').append(newSquare);
      })
    });
  }
}

module.exports = View;
