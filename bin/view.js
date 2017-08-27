class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {}
}

View.prototype.setupBoard = function () {
  this.$el.append('<div id="board" ></div>');
  for(var i = 1; i < 10; i++) {
    this.$el.children().append('<div class="square" id="' + i + '"></div>');
  };

};

module.exports = View;
