var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

var io = require('socket.io')(server);
var path = require('path');


app.use(express.static(path.join(__dirname,'./public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


// REMOVE FOR DEMO
io.on('connection', (socket) => {
    socket.on('signup', (name) => {
        socket.broadcast.emit('signup', name);
    });
});

server.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on :3000');
});


