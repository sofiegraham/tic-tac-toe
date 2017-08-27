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
  /*
  Add ul

  */
  this.$el.append('<ul id="board" ></ul>');
  for(var i = 1; i < 10; i++) {
    this.$el.children().append('<li class="square" id="' + i + '"></li');
  };

};

module.exports = View;
