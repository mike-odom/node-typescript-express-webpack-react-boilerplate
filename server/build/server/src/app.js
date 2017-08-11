"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('source-map-support').install();
const express = require("express");
const handlebars = require('express-handlebars');
const webpack = require("webpack");
const path = require("path");
//This feels hacky, but it's because we're deep into the build folders.
const clientRoot = "../../../../client/";
const app = express();
app.use(express.static(path.join(__dirname, clientRoot, 'public')));
// Handlebars view engine setup
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
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
app.listen(3000, function () {
    console.log('Server listening on port 3000');
});
//# sourceMappingURL=app.js.map