var mongojs = require('mongojs');
var db = mongojs('workshopdb', ['users']);

db.users.insert({
  name: 'arvind',
  age: 'quite old'
}, function(err, data) {
  console.log(err || data);
});

db.users.find({
  name: 'arvind'
}, function(err, data) {
  console.log(err || data);
});

db.users.update({
  name: 'arvind'
}, {
  age: 'You know!!'
}, function(err, data) {
  console.log(err || data);
});

db.users.remove(function(err, data) {
  console.log(err || data);
});
