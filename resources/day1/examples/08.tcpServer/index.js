/* https://gist.github.com/creationix/707146 */

var net = require('net'),
  users = [],
  port = 2772;

net.createServer(function(socket) {
  socket.userid = socket.remoteAddress + ":" + socket.remotePort;
  users.push(socket);
  socket.write("Hello " + socket.userid + "\n");
  broadcast(socket.userid + " joined the chat\n", socket);

  socket.on('data', function(data) {
    broadcast(socket.userid + "> " + data, socket);
  });

  socket.on('end', function() {
    users.splice(users.indexOf(socket), 1);
    broadcast(socket.userid + " left the chat.\n");
  });

  function broadcast(message, sender) {
    users.forEach(function(user) {
      if (user === sender) return;
      user.write(message);
    });
    process.stdout.write(message)
  }

}).listen(port);

console.log("Chat server running at port " + port + "\n");
