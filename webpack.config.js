// fake webpack config used only to help make WebStorm resolve imported .less files
const path = require('path');

module.exports = {
  context: __dirname,
  resolve: {
    alias: {
      styles: path.resolve(__dirname, "./src/styles")
    }
  }
};
