// node 后端服务器

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('dist'));

// 后端api路由
//显示主页面
app.get('/',function (req,res) {
    res.sendFile(__dirname+"\\dist\\index.html")
    // res.sendFile("F:\\WorkPlace\\Vue-cli-Projects\\First-Vue-Demo\\dist\\index.html")
    // console.log(__dirname,"../dist/index.html")
    // res.sendFile(__dirname,"../dist/index.html")

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