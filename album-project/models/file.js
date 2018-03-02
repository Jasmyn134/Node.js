var fs=require("fs");
//异步函数都存在一个回调函数callback
exports.getAllAlbums=function(callback){
	//为了找到所有的文件夹
	fs.readdir("./uploads",function(err,files){
		
		if(err){
			callback("没有找到文件",null)
			return ;
		}
		
		var allAlbums=[];
		//迭代器
		(function iterator(i){
			if(i == files.length){
				//遍历结束
				 callback(null,allAlbums)
				return;
			}
			fs.stat("./uploads/"+files[i],function(err,stats){
				if(stats.isDirectory()){
					allAlbums.push(files[i])
				}
				iterator(i+1)
			});
			
		})(0)
		
	})
	
}

exports.getAllImagesByAlbumName=function(albumName,callback){
	//为了找到所有的文件夹
	fs.readdir("./uploads/"+albumName+"/",function(err,files){
		
		if(err){
			callback("没有找到文件",null,null)
			return ;
		}
		
		var imagesArray=[];
		//迭代器
		(function iterator(i){
			if(i == files.length){
				//遍历结束
				 callback(null,albumName,imagesArray)
				return;
			}
			fs.stat("./uploads/"+albumName+"/"+files[i],function(err,stats){
				if(stats.isFile()){
					imagesArray.push(files[i])
				}
				iterator(i+1)
			});
			
		})(0)
		
	})
}
