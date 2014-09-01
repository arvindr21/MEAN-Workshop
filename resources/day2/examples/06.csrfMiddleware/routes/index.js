var express = require('express');
var router = express.Router();

module.exports = function(csrf) {
  /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index', {
      title: 'Express',
      csrf: req.csrfToken()
    });
  });

  return router;
};
