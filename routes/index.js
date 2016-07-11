var express = require('express');
var router = express.Router();
var db = require('../db/api');

// Render team members on index page
router.get('/', function(req, res, next) {
  db.findMembers().then(function(data) {
    res.render('index', {members: data});
  });
});

module.exports = router;
