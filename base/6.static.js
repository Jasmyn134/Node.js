var http=require("http");
var url=require("url");
var fs=require("fs");
var path=require("path");



http.createServer(function(req,res){
	//得到用户的路径
	var pathname=url.parse(req.url).pathname;
	//默认首页  判断输入的是否有点，没有点就默认打开当前文件夹中的index.html页面
	/*if(pathname=='/'){
		pathname="index.html"
	}*/
	if (pathname.indexOf(".")==-1){
        pathname="index.html"
	}
	//获取拓展名
	var extname=path.extname(pathname);
    var MINE=getMime(extname);
	console.log(MINE)
	//读取这个文件
	fs.readFile("./static/"+pathname,function(err,data){
		if(err){
			//如果此文件不存在
//			throw err
			fs.readFile("./static/404.html",function(err,data){
				res.writeHead(404,{"Content-type":"text/html;charset=utf-8"});
				res.end(data);
			})
			return false;
		};
		//MIME类型：就是
		//网页文件；   text/html
		//jpg文件   image/jpg
		//path.extname(p) 获取扩展名

		res.writeHead(200,{"Content-type":MINE});
		res.end(data)
	})
	
}).listen(3000,'127.0.0.1')


function getMime(extname){
	/*switch (extname){
		case ".html":
			return "text/html";
			break;
		case ".jpg":
			return "image/jpg";
			break;
		case ".css":
			return "text/css";
			break;
	}*/
    console.log(extname)
	//同步读取文件
	var data=fs.readFileSync("./mime.json",'utf-8');
	data=JSON.parse(data);
    return data[extname];
}
//回调函数的思路
/*
function getMime(extname,callback){
    //同步读取文件
    var data=fs.readFileSync("./mime.json",'utf-8');
    data=JSON.parse(data);
    //找不到会默认一个类型
    callback(data[extname] || "text/plain');
}*/
