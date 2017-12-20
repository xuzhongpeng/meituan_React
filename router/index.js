var express = require('express');
var router = express.Router();
var  querystring  =  require('querystring'); 
var bodyParser = require('body-parser');
var app=express();
/* GET home page. */
// module.exports.homead  = router.get('/homead', function(req, res, next) {
//     res.send(homead);
// });
// module.exports.homead  = router.get('/api/homelist/:city/:page', function(req, res, next) {
//     res.send(homead);
// });

// app.use(bodyParser.json());
// app.use(bodyParser.text());
// app.use(bodyParser.urlencoded({ extended: false }));

router.use(function(req, res, next) {
      // console.log('%s %s %s', req.method, req.url, req.path);
       next();
});
    
var homeAdDate = require('./home/ad.js')
router.use('/homead', function(req, res, next) {
    // ... maybe some additional /bar logging ...
    homeAdDate(function (result) {
        res.send(result)
    })
});

var homeListData = require('./home/list.js')
router.use('/homelist', function(req, res, next) {
    req.on('data', function (data) {
        getdata1=data;       
    })
    req.on('end',function(){ 
        homeListData(function(result){
            res.send(result)
        })
    })   
});

// 搜索结果页 - 搜索结果 - 三个参数
/**
 * 
 */
var searchListData = require('./search/list.js')
router.use('/search', function(req, res, next) {   
    req.on('data', function (data) {
        getdata1=data;       
    })
    req.on('end',function(){ 
        searchListData(function (result) {
            res.send(result)
        })
    })    
})

// 详情页 - 商户信息
const detailInfo = require('./detail/info.js')
router.use('/detail/info', function(req,res,next) {
    req.on('data', function (data) {
        const id = data
    })
    req.on('end',function(){ 
        detailInfo(function(result){
            res.send(result)
        })
        
    })      
})

// 详情页 - 用户评论
const detailComment = require('./detail/comment.js')
router.use('/detail/comment', function(req,res,next) {
    req.on('data', function (data) {
        const id = data
    })
    req.on('end',function(){ 
        detailComment(function (result) {
            res.send(result)
        })
    })  
     
})

// 订单列表
const orderList = require('./orderlist/orderList.js')
router.use('/orderlist', function (req,res,next) {
    req.on('data', function (data) {
        const id = data
    })
    req.on('end',function(){ 
        orderList(function (result) {
            res.send(result)
        })
    })  
})
// 提交评论
router.use('/submitComment', function (req,res,next) {
    // 获取参数
    req.on('data', function (data) {
        const id = data
    })
    req.on('end',function(){ 
        var result={
            errno: 0,
            msg: 'ok'
        }
        res.send(result)
    }) 
    
})

// always invoked
router.use(function(req, res, next) {
    res.send('');
});

module.exports=router;

