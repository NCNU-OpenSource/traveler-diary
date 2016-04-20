var x = require('./test.js');

x();

x.printname();

//=================

var Keyholder = require('./test.js');

var x = new Keyholder("xxx");
var y = new Keyholder("yyy");

x.printname();
y.printname();