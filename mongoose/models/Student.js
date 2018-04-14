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

// model
var studentModel = mongoose.model('Student', studentSchema);


module.exports = studentModel