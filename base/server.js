var http=require("http");
//接下来我们使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。
//函数通过 request, response 参数来接收和响应数据。
http.createServer(function(request,response){
	//发送 HTTp 头部
	//HTTP状态值： 200 ：OK
	//内容类型 ： text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write("<h1>我是主标题</h1>")
	//发送响应数据 “Hello World”  end()必须要写  edn里边传的必须是字符串 end((1+2+3).toString())
	response.end('hello world\n heyushuo');
}).listen(8181,"127.0.0.1")

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8181/');