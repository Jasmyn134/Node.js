/**
 * Created by Danny on 2015/9/22 9:22.
 */
var express = require("express");

var app = express();
//下边两个互相不冲突
app.get("/haha",function(req,res){
    res.send("这是haha页面，哈哈哈哈哈哈");
});
//下边两个互相不冲突
app.use(express.static("./public"));


app.listen(3000);