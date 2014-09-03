var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res) {
  res.json(require('../data/movies'));
});

module.exports = router;
