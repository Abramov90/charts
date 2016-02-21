var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

router.get('/charts', function(req, res, next) {
    fs.readFile(path.join(__dirname, '../data/charts.json'), 'utf8', function (err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
    });

});

module.exports = router;
