var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    name : {type : String},
    age    : {type : Number},
    sex      : {type : String}
});


//还可以创建一些静态方法
// 添加 mongoose 静态方法，静态方法在Model层就能使用
studentSchema.statics.zhaoren = function(name, callback) {
    return this.model('Student').find({name: name}, callback);
}
//这样可以把对一个集合的所有操作都写在这个静态方法里
// model
var studentModel = mongoose.model('Student', studentSchema);


module.exports = studentModel