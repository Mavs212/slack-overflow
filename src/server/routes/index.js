var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../../../db/knex');
var passport = require('../lib/auth');
var bcrypt = require('bcrypt');
var helpers = require('../lib/helpers');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Slack Overflow' });
});

router.get('/questions/1', function(req, res, next) {
  res.render('question', {title: 'Slack Overflow'});
});

router.get('/questions/new', function(req, res, next) {
  res.render('newQuestion', {title: 'Slack Overflow - Post a Question'});
});



module.exports = router;
