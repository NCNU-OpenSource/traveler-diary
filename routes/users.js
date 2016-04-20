var express = require('express');
var router = express.Router();

//for register page ,

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('register an account');
});

router.get('/:id',function(req,res,next){
  res.json({
    id:'101213016',
    password:'pwd'
  });
});

router.post('/:id',function(req,res,next){
   res.send("register success");
});

router.put('/:id',function(req,res,next){
  res.send("remodify account");
});


// router.delete('/:id',function(req,res,next){
//   res.send("delete an account");
// });

module.exports = router;
