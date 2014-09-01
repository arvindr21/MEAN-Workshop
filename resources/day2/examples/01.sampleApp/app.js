var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('<a href="/hello">Hello Page</a>');
});

app.get('/hello', function(req, res) {
  res.send('Hello World');
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
