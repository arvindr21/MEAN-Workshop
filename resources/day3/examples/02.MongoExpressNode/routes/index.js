var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('workshopdb', ['users']);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'My App'
  });
});

router.post('/data', function(req, res) {
  var data = [];
  db.users.insert(req.body, function(err, data) {
    res.send('<h3>Saved data</h3> Name :' + data.name + '<br/> Gender : ' + data.gender);
  });
});

module.exports = router;
