/**
 * Created by emma on 2017-02-24.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('index.html');
});

module.exports = router;