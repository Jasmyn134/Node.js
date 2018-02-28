var http=require("http");
var url=require("url");
//接下来我们使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。
//函数通过 request, response 参数来接收和响应数据。
http.createServer(function(request,response){
	//  url.parse可以把完整的地址分为很多部分，都有  host ，port（端口） ，pathname ，path （包含？），
	var path=url.parse(request.url).pathname;
	console.log('path:'+path)
	//第二个参数是true，得到的是个对象
	var query=url.parse(request.url,true).query;
	console.log(query)
	var id=query.id;
	console.log(id)
//	var path=url.parse(request.url).pathname;
//	console.log(path)
	/**
	 * req.url来进行路由设计
	 * 最关键的就是req.url属性，表示用户的请求URL地址。所有的路由设计，都是通过req.url来实现的。
	*	我们比较关心的不是拿到URL，而是识别这个URL。
	*	识别URL，用到两个新模块，第一个就是url模块，第二个就是querystring模块
	 * 
	 */
	//HTTP状态值： 200 ：OK
	//内容类型 ： text/plain
			response.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
			//发送响应数据 “Hello World”
			response.end("");
}).listen(8181)

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8181/');
