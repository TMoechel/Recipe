var _ = require('lodash');
var router = require('express').Router();
var logger = require('../../util/logger')
var categoryController = require('./categoryController');


var KeyId = 0;

router.route('/')
    .get(function (req, res) {
        categoryController.get(req, res);
    })
  
module.exports = router;