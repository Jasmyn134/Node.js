var file=require("../models/file.js");


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