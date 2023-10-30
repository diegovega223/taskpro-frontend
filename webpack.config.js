const path = require('path');

module.exports = {
  entry: './js/src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'js/dist'),
  },
};
