const express = require('express/index.js');
const webpack = require('webpack/index.js');
const webpackDevMiddleware = require('webpack-dev-middleware/index.js');

const app = express();
const config = require('./webpack.config.js');
//const config = require('./webpack.config.ts');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
