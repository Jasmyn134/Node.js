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
			console.log(files);
			for(var i=0;i<files.length;i++){
				var thefilename=files[i];
				//循环里边套异步会出现错误     需要变成同步
				//检测是否是文件夹
				fs.stat("./album/"+thefilename,function(err,stats){
					if(stats.isDirectory()){
						wenjianjia.push(thefilename)
					}
					console.log(wenjianjia)
				})
					
			}
			//以为是异步的写在外边不会打印
//			console.log(wenjianjia)
		})
		
}).listen(8181)

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8181/');
