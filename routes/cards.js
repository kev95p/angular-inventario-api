var express = require('express');
var router = express.Router();

var request = require('request');
const token = require('../token.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    request.get('https://api.clashroyale.com/v1/cards', {
        'auth': {
            'bearer': token
        }
    }, function(error, response, body) {
        res.json(JSON.parse(body));
    });
});

module.exports = router;