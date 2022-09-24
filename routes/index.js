var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index');
});


router.use('/services/:d/:h', (req,res,next)=>{
  if(req.params.d<1||req.params.d>5){
    res.send("<h2>our opening hours are monday to friday 9 am to 5pm</h2>")
  }else if (req.params.h < 9 || req.params.h > 17){
    res.send("<h2>our opening hours are monday to friday 9 am to 5pm</h2>")
  }
  next()
})

router.get('/services/:d/:h',(req,res,next)=>{
  res.render('services')
})


router.use('/contact/:d/:h', (req,res,next)=>{
  if(req.params.d<1||req.params.d>5){
    res.send("<h2>you can contact us between 9am to 5pm,</h2>")
  }else if (req.params.h < 9 || req.params.h > 17){
    res.send("<h2>you can contact us between 9am to 5pm,</h2>")
  }
  next()
})

router.get('/contact/:d/:h',(req,res,next)=>{
  res.render('contact')
})

module.exports = router;
