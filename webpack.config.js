const path = require(`path`);
 
module.exports = {
  mode: `development`, 
  entry: `./resources/scripts/index.js`, 
  output: {
    filename: `main.js`,
    path: path.resolve(__dirname, `dist`), 
  },
  resolve: {
    extensions: [ `.js` ], 
  },
};