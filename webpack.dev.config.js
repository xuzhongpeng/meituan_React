let webpack = require("webpack");
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let devMiddleWare = require('webpack-dev-middleware');
let hotMiddleWare = require('webpack-hot-middleware');


let baseConfig = require('./webpack.config');
let devOption = {
entry: {
app:[
    'webpack-hot-middleware/client',
    './app/index.jsx'
    ],
},
output: {
    path: '/',
    filename: "bundle.js",
// publicPath: '/'
},
plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    /* new HtmlWebpackPlugin({
    template: './app/index.tmpl.html' 
    }), */
    // html 模板插件
    new HtmlWebpackPlugin({
        template: __dirname + '/app/index.tmpl.html'
    })
]}


module.exports = function(app){
    console.log("进入到dev")
    let webpackconfig = Object.assign({}, baseConfig, devOption);// console.log(webpackconfig);

    var compiler = webpack(webpackconfig);// console.log(compiler);
    app.use(devMiddleWare(compiler,{
        publicPath: webpackconfig.output.publicPath,
        stats: {
            colors: true,
            chunks: false
        }
    })
    );
    app.use(hotMiddleWare(compiler));
    return app;
}