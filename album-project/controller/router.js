var file=require("../models/file.js");
var formidable = require('formidable');
var path=require("path");
var fs=require("fs");
//path.normalize( )

var sd=require("silly-datetime");

//node碰见异步函数，不会等待return结果后在进行，会直接进行其他事情，
exports.showIndex=function(req,res){
	/*res.render("index",{
		"albums":file.getAllAlbums()
	})*/
	//Node.js的变成思维，就是所有的东西都是异步的
	//所以，内层函数，不是return回来的东西，而是而是调用高层的函数提供的回调函数
	//把数据当做回调函数的参数来使用
	file.getAllAlbums(function(err,allAlbums){
		if(err){
			res.render("err");
			return;
		}
		res.render("index",{
			"albums":allAlbums
		})
	})
}


exports.showAlbum=function(req,res){
	//遍历相册中的图片
	var albumName=req.params.albumName;
	file.getAllImagesByAlbumName(albumName,function(err,albumName,imagesArray){
		if(err){
			res.render("err");
			return;
		}
		res.render("album",{
			"albumname":albumName,
			"images":imagesArray
		})
	})
	
}

exports.showUp=function(req,res){
	//得到所有文件夹名字
	file.getAllAlbums(function(err,allAlbums){
		if(err){
			res.render("err");
			return;
		}
		res.render("up",{
			"albums":allAlbums
		})
	})
}
//上传表单
exports.doPost=function(req,res){
	if (req.url == '/up' && req.method.toLowerCase() == 'post') {
	    // parse a file upload 
	    var form = new formidable.IncomingForm();
	  //设置文件存放路径
	  //path.normalize可以上次路径回撤一级
	  form.uploadDir=path.normalize(__dirname+"/../tempup/");
	  console.log(form.uploadDir)
	    form.parse(req, function(err, fields, files) {
	      console.log(fields);
	      console.log(files);
	      
	      //时间，使用第三方模块，silly-datetime
	      var ttt=sd.format(new Date(),'YYYYMMDDHHmmss');
	      var ran=parseInt(Math.random()*89999+10000);
	      var extname=path.extname(files.tupian.name)
	      
	      //传完之后需要改名字
	      if(err){
	      	next();//这个中间件不受理这个请求
	      	return;
	      }
	      console.log(files.tupian.size)
	      //判断文件的大小
	      var size=parseInt(files.tupian.size);
	      if(size>1024){
	      	res.send("图片尺寸应该小于1M");
	      	fs.unlink(files.tupian.path);
	      	return;
	      }
	      
	      
	      var wenjianjia=fields.wenjianjia;
	      var oldpath=files.tupian.path;
	      //新的路径有案部分组成， 时间戳，随机数，扩展名
	      var newpath=path.normalize(__dirname+"/../uploads/"+wenjianjia+"/"+ttt+ran+extname);
	      fs.rename(oldpath,newpath,function(err){
	      	 if(err){
	      	 	res.send("改名失败");
	      	 	return;
	      	 }
	      	 res.end("success")
	      })
	    });
	 	
	    return;
	}
}