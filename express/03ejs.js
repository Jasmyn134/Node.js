var express=require("express");
// npm install --save ejs
var app=express();
//view:视图 engin：引擎
app.set("view engin","ejs");
app.get("/",function(req,res){
	// .ejs 可以省略
	res.render("template.ejs",{
		"news":[
			"我是heyushuo",
			"我是老大",
			"我是it大神"
		]
	})
})
app.listen(3000)
