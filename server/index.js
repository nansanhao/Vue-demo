// node 后端服务器

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 后端api路由
//显示主页面
app.get('/api/home',function (req,res) {
    res.send("主页面")

});

// 监听端口
app.listen(3000);

console.log('success listen at port:3000......');
//服务器
// var server = app.listen(3000, function () {
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log("应用实例，访问地址为 http://%s:%s", host, port)
// });