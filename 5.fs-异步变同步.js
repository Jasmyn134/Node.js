var http=require("http");
var fs=require("fs");
//接下来我们使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。
//函数通过 request, response 参数来接收和响应数据。
http.createServer(function(request,response){
		if(request.url=='/favicon.ico'){
			return;
		}
		var wenjianjia=[];//只储存文件夹
		fs.readdir("./album",function(err,files){
			//files是一个数组，包含album中的所有文件和文件夹
			//定义一个递归函数，自己调用自己
			(function iterator(i){
				if(i==files.length){
					console.log(wenjianjia);
					return;
				}
				console.log(files)
				fs.stat("./album/"+files[i],function(err,stats){
					console.log(stats.isDirectory())
					if(stats.isDirectory()){
						console.log("11111111")
						wenjianjia.push(files[i]);
						console.log(wenjianjia)
					}
				});
				iterator(i+1);
			})(0);
		})
		response.end("heyushuo")
}).listen(8181)

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8181/');
