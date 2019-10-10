var express = require('express');
var router = express.Router();
const data = require("../json/data")

router.get("/" , function (req , res){
    res.send("Hello world")
})
router.get("/data", function(req, res){
    res.json(data)
})



module.exports = router;
