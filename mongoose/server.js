
require('./models/model.js')
const Student=require('./models/Student.js')
const express = require('express')
const app = express()


/*
 * 测试往Student上添加的静态方法
 */
Student.zhaoren("何玉硕",function(err,result){
	console.log(result)
})
app.get('/add',function(req,res){
	/**
	 * 通过创建类的方式添加人
	 */
	/*var xiaoming=new Student({"name":"游国恩","age":12,"sex":'男'})
	xiaoming.save(function(){
		console.log("储存成功！！！")
	})*/
	
	/**
	 * 通过create创建用户
	 */
	Student.create({"name":"杜尧","age":39,"sex":'男'},function(err){
		console.log("create添加成功")
	})
	return res.json("成功")
})


app.get("/list",function(req,res){
	Student.find({},function(err,doc){
		return res.json(doc)
	})
})
app.listen("8888")
