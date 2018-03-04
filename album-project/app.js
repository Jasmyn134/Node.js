var express=require("express");
var app=express();
var router=require("./controller/router.js");
//设置了模板引擎
app.set("view engine","ejs");

//路由中间件
//静态页面  app.use("/static",express.static("./public"));可以添加前缀
//只有public提供了静态服务
app.use(express.static("./public"));

app.use(express.static("./uploads"));


//不用传参数是回调时往里边添加的两个参数res 和 req
app.get("/",router.showIndex);
app.get("/up",router.showUp);
app.post("/up",router.doPost);
app.get("/:albumName",router.showAlbum);

app.use(function(req,res){
	res.render("err")
});
app.listen(3000)
