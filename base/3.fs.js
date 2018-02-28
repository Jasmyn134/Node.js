var http=require("http");
var fs=require("fs");
//接下来我们使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。
//函数通过 request, response 参数来接收和响应数据。
http.createServer(function(request,response){
		if(request.url=='/favicon.ico'){
			return;
		}
//		fs.mkdir("./album/aaa") //创建文件夹
		
		fs.stat("./album/aaa",function(err,data){
			//检测这个路径，是不是一个文件夹
			console.log(data.isDirectory());
		})
		
}).listen(8181)

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8181/');
