var express = require('express');
var router = express.Router();


//在timeline上列出某使用者所有個project的資料
router.get('/', function(req, res, next) {
  //res.send("Show userid's project data <br>"+ collectiondata);
  res.send("timeline page");
});
//查詢timeline中的某個專案遊  可以用年月去查詢
router.get('/:timescope',function(req,res,next){
  res.json({
     time:req.params.timescope,
     diary:[
       {
         diaryID:1,
         diaryName:"台北行"
       }
     ]
  });
});



module.exports = router;
