var express = require("express");
var app = express();
var session = require("express-session");
var db=require("./model/db.js")

app.set("view engine","ejs");

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.get("/",function(req,res){
	if(req.session.login == "1"){
		res.send("欢迎" + req.session.username);
	}else{
		res.send("没有成功登陆");
	}
})
app.get("/login",function(req,res){
	res.render("denglu")
});
app.get("/checklogin",function(req,res){
	var name=req.query.username;
	var password=req.query.password;
	//根据用户填写的姓名，去数据库里面找这个文档，读取密码。
    //如果读取的密码，和填写的密码一样，登陆成功了；
    //如果读取的密码，和填写的密码不一样，登陆失败
    //如果根本没有找到这个记录，那么就说明用户名填写错了
    db.find("users",{"username":name},function(err,result){
    	if(result.length==0){
    		res.send("你的登陆名字写错了，没有这个注册用户");
    		return;
    	}
    	var dataPassword=result[0].password;
    	if(dataPassword==password){
    		req.session.login = "1";	//设置这个session
			req.session.username = result[0].username;
			res.send("你已经成功登陆");
    		return;
    	}else{
    		res.send("你的密码错误了");
    		return;
    	}
    })
    
})

app.listen(3000);