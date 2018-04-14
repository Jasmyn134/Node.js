//这里只需要引入mongoose(这里边包含了mongodb)
//不需要引入mongodb
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

//这样一句话可以吧mongoose.connect  mongoose.connection 这两件事情同事做了
//var db       = mongoose.createConnection('mongodb://localhost/test'); 

mongoose.connection.once('open',function () {
	console.log("数据库成功连接")
})

