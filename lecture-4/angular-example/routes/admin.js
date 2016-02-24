var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/users');


router.get('/users', function(req, res, next) {
  User.find(function(err, data) {
    res.json(data);
  });
});

module.exports = router;
