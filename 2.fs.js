var http=require("http");
var fs=require("fs");
//接下来我们使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。
//函数通过 request, response 参数来接收和响应数据。
http.createServer(function(request,response){
		if(request.url=='/favicon.ico'){
			return;
		}
		//当前文件下必须是     ./（在Linux平台下必须这样写，win平台下可以直接写文件或者文件名）   不能直接写文件或者文件名
		fs.readFile("./index.html",function(err,data){
			if(err){ throw err; }  //有异常会抛出异常，不执行下边的程序
			//发送 HTTp 头部
			//HTTP状态值： 200 ：OK
			//内容类型 ： text/plain
			response.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
			console.log(1)
			//发送响应数据 “Hello World”
			response.end(data);
		})
		console.log(2)
		
		//先打印出来2后打印出来1，这是因为非阻塞I/O,先执行下边的内容，等有了响应之后，再去执行回调函数里的内容
		
		
		
}).listen(8181)

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8181/');
