// 引入模块
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var app = express();
var router=require('./router/index');
// 对所有(/)URL或路由返回index.html 
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");

/* var compiler = webpack({
    // configuration
    output: { path: '/' }
});
app.use(webpackDevMiddleware(compiler, {
    // options
}));
 */

let webpackconfig = require('./webpack.dev.config');
webpackconfig(app)

app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api',router);

app.get('/', function (req, res) {
    res.render('index.html');
});

// 设置views路径和模板
app.set('views', './client/static/');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// 静态文件配置
app.use('/client/static', express.static(path.join(__dirname, 'client/static')));

// 启动一个服务，监听从8888端口进入的所有连接请求
var server = app.listen(8888, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
}); 