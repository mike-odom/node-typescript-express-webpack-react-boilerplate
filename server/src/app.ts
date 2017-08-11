require('source-map-support').install();

import express = require('express');
const handlebars = require('express-handlebars');

import webpack = require('webpack');

import path = require('path');

//This feels hacky, but it's because we're deep into the build folders.
const clientRoot = "../../../../client/";

const app = express();

app.use(express.static(path.join(__dirname, clientRoot, 'public')));

// Handlebars view engine setup
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Webpack
const webpackConfig = require(path.join(clientRoot, 'webpack.config.js'));
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

// Routes
const indexRoute = require('./routes/index');
app.use('/', indexRoute);

// Start the server
app.listen(3000, function() {
  console.log('Server listening on port 3000');
});

