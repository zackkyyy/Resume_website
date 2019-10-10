var express = require('express');
var router = express.Router();
const data = require("../json/data")



router.get('/', function(req, res, next) {
    console.log(data)
    res.render('index', data);
  });
router.get("/data", function(req, res){
    res.json(data)
})



module.exports = router;
