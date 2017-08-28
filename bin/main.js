const Game = require('../lib/game.js');
const View = require('./view.js');

$( () => {
  const $el = $('figure');
  const game = new Game();
  const view = new View(game, $el);
  game.run();
});
