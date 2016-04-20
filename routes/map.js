var express = require('express');
var router = express.Router();


//在timeline上列出某使用者所有個project的資料
router.get('/', function(req, res, next) {
  //res.send("Show userid's project data <br>"+ collectiondata);
  res.send("map page");
});
//查詢timeline中的某個專案遊  可以用年月去查詢
router.get('/:pictureid',function(req,res,next){
  res.json({
     time:req.params.pictureid,
     diary:"Taiwan"
  });
});



module.exports = router;
