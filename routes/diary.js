var express = require('express');
var router = express.Router();

/* GET users listing. */

//列出某使用者所有個project的資料
router.get('/', function(req, res, next) {
  //res.send("Show userid's project data <br>"+ collectiondata);
  res.send("日記內容");
});


//update a project1
router.put('/:diarycontent',function(req,res,next){
  res.send("update a diary" + req.params.diarycontent);
});




module.exports = router;
