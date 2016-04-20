
//1
module.exports = function() {
	console.log('foo');
}
//2
exports = {foo: 'foo'}
//3
module.exports = {foo: 'xxx'};   //module.exports 不會被module更改(因為都有foo)
//4
exports.zoo = function() {
	console.log();
}
//===========================================================5
var keyholder = function(name){ //再物件加入屬於他的東西
	this.name = name;  //similar to the java's constructor
}
//6
keyholder.prototype.printname = function() {   //prototype 為定義一個java 的 class框架 這個框架裡面你就可以定義 var string method
	console.log(this.name);
}
//7
module.exports = new keyholder();   //不用再外面 再new各種var了

//==================8
module.exports = Keyholder;  //require 之後需要再new
//9
exports.kh = Keyholder;
/*
var Keyholder require('./test.js').kh    這裡的require就得 加入 kh的名稱    表示一個module裡面會有很多class