const path = require('path');

module.exports = {
  entry: './bin/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'lib')
  }
};
