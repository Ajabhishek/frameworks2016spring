var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');


router.get('/users/:id', function(req, res, next) {
  User.findOne({_id: req.params.id}, function(err, data) {
    res.json(data);
  });
});
  
router.get('/users', function(req, res, next) {
  User.find(function(err, data) {
    if(err) { console.error(err); return }
    res.json(data);
  });
});

router.post('/users/:id', function(req, res, next) {
  var query = {_id: req.params.id};
  User.findOneAndUpdate(query, req.body, function(err, data) {
    if(err) { 
      res.json({err: err});
    }
    else {
      res.json({err: false});
    }
  });
});
  
router.post('/users', function(req, res, next) {
  User.create(req.body, function(err, data) {
    if(err) { console.error(err); return }
    res.json(data);
  });
});
  
router.delete('/users/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, function(err) {
    if(err) { 
      res.json({err: err});
    }
    else {
      res.json({err: false});
    }
  });
});



router.put('/users/:id', function(req, res, next) {
  var query = {_id: req.params.id};
  User.findOneAndUpdate(query, req.body, function(err, data) {
    if(err) { 
      res.json({err: err});
    }
    else {
      res.json({err: false});
    }
  });
});

module.exports = router;
