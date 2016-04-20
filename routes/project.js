var express = require('express');
var router = express.Router();

/* GET users listing. */
var diarydata = {
  userid:'101213016',
  name:'will',
  diarylist:[{
        diaryid:'001',
        dia_name:'Taipei',
        content:'Taipei is fun'
  },{
    diaryid:'002',
    dia_name:'Taichung',
    content:'Taichung is SOSO'
  },{
    diaryid:'003',
    dia_name:'Taiwan No.1',
    content:'Taiwan is better than Chixx'
  }]
};
//列出某使用者所有個project的資料
router.get('/', function(req, res, next) {
  //res.send("Show userid's project data <br>"+ collectiondata);
  res.json(diarydata);
});

router.get('/:diaryID',function(req,res,next){
  // res.json({
  //    diaryID:req.params.diaryID,
  //    name:"Tapei tourist"
  // });
res.json(diarydata);
});

router.post('/:diaryID',function(req,res,next){
  res.send("add a new diary" + req.params.diaryID);
});

//update a project
router.put('/:diaryID',function(req,res,next){
  res.send("update a diary" + req.params.diaryID);
});
//delete a project
router.delete('/:diaryID',function(req,res,next){
  res.send("delete a diary" + req.params.diaryID);
});


module.exports = router;
