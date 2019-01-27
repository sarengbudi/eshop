var express = require('express');
var router = express.Router();

//setup home index
router.get('/',function(req, res){
    res.json('ini halaman admin');
    }) ;




module.exports = router;
