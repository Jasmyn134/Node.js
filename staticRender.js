var http=require("http");
var fs=require("fs");
//接下来我们使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。
//函数通过 request, response 参数来接收和响应数据。
http.createServer(function(request,response){
	//req.url来进行路由设计
	if(request.url=="/1"){
		fs.readFile("./index.html",function(err,data){
			//发送 HTTp 头部
			//HTTP状态值： 200 ：OK
			//内容类型 ： text/plain
			response.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
			//发送响应数据 “Hello World”
			response.end(data);
		})
	}else if(request.url=="/2"){
		fs.readFile("./index1.html",function(err,data){
			//发送 HTTp 头部
			//HTTP状态值： 200 ：OK
			//内容类型 ： text/plain
			response.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
			//发送响应数据 “Hello World”
			response.end(data);
		})
	}else if(request.url=="/img/1.jpg"){
		fs.readFile("./img/1.jpg",function(err,data){
			//发送 HTTp 头部
			//HTTP状态值： 200 ：OK
			//内容类型 ： text/plain
			response.writeHead(200,{'Content-Type':'image/jpg'});
			//发送响应数据 “Hello World”
			response.end(data);
		})
	}else{
			//发送 HTTp 头部
			//HTTP状态值： 200 ：OK
			//内容类型 ： text/plain
			response.writeHead(404,{'Content-Type':'text/html;charset=UTF-8'});
			//发送响应数据 “Hello World”
			response.end("没有这个页面哦");
	}
	
	
}).listen(8181)

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8181/');
