var http = require("http");
var url = require("url");

var server = http.createServer(function(req,res){
	var userurl=req.url();
	//正则表单式来判断此时的地址
	var reg=/stutent/
	//substr函数来判断此时的开头
	if(userurl.substr(0,9)=="/stutent/"){
		var stutentid=userurl.substr(10,-1);
		if(/\w{10}/.test(stutentid)){
			res.end("您要查询学生的id为：" + stutentid);
		}else{
			res.end("学生学号位数不对");
		}
	}else if(userurl.substr(0,9)=="/teacher/"){
		var teacherid=userurl.substr(10,-1);
		if(/\w{10}/.test(teacherid)){
			res.end("您要查询老师的id为：" + teacherid);
		}else{
			res.end("老师学号位数不对");
		}
	}else{
		res.end("请检查url")
	}
});

server.listen(3000,"127.0.0.1");