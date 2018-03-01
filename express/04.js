var express=require("express");
var app=express();
//不区分大小写
app.get("/Abb",function(req,res){
	res.send("你好")
})
app.get("/student/:id",function(req,res){
	var id=req.params["id"];
	var reg=/^[\d]{6}$/;
	if (reg.test(id)){
		res.send(id)

	}else{
		res.send("输入有误")
	}
})

//冒号
app.get("/:username/:oid",function(req,res){
	var username = req.params["username"];
	var oid = req.params["oid"];

	res.write(username);
	res.end(oid);
});
app.listen(3000)
