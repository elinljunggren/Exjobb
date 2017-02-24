/**
 * Created by emma on 2017-02-24.
 */
/**
 * Created by emma on 2017-02-24.
 */
var express = require('express');
var router = express.Router();

router.get('/tasks', function(req, res, next){
    res.send('TASK API');
});

module.exports = router;