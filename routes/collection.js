var express = require('express');
var router = express.Router();
// var bodyParser = require('body-parser');
// var app = express();
//
// app.use(bodyParser.json());       // to support JSON-encoded bodies
// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//   extended: true
// }));

/* GET users listing. */
var collectiondata = {
  userid:'101213016',
  name:'will',
  projectlist:[{
     collectionid:'1',
     coll_name:'Taiwan tourist',
     diarys:[{
        diaryid:'001',
        dia_name:'Taipei',
        content:'Taipei is fun'
     }]},{
       collectionid:'2',
       coll_name:'Ammerican tourist',
       diarys:[{
          diaryid:'101',
          dia_name:'Sandiago',
          content:'Sandiago is fun'
       }]
   }]
};

router.get('/', function(req,res,next){
  res.json(collectiondata);
});

router.post('/', function(req, res, next) {
   //res.send("Show userid's project data <br>"+ collectiondata);
   collectiondata.userid = req.body.username;
   console.log(req.body.username);
   res.render('collection',{
     username:req.body.username});
});
//
// //選擇專案遊(project)中的某一個日記
// router.get('/diary',function(req,res,next){
//   //getting the project which user choose
//   res.render('diary',{title:'diary page'});
// }); //render裡面需有包含 json格式

router.get('/timeline',function(req,res,next){
  res.render('timeline',{title:'showing projects of timeline'});
});

router.get('/map',function(req,res,next){
  res.render('map',{title:'showing diarys of map'});
});

//要導引到其他地方需要擺在   /:projectID 取值得上方 避免混淆

router.get('/:projectID',function(req,res,next){
  var projectName = req.query.name;

  console.log(req.query.name);
  res.render('project',{Project_name:projectName});
  //
  // res.json({
  //    projectID:req.params.projectID,
  //    Name:"台灣環島7日遊"
  // });
});

router.post('/:projectID',function(req,res,next){
  res.send("add a new project" + req.params.projectID);
});

//update a project
router.put('/:projectID',function(req,res,next){
  res.send("update a project" + req.params.projectID);
});
//delete a project
router.delete('/:projectID',function(req,res,next){
  res.send("delete a project" + req.params.projectID);
});


module.exports = router;
