var express = require('express');
var router = express.Router();
const data = require("../json/data")
const fs = require('fs');

router.get('/', function(req, res, next) {
    res.render('index', data);
  })
router.get("/data", function(req, res){
    res.json(data)
})



module.exports = router;
