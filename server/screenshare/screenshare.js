// server.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
  console.log('Client connected');

  socket.on('startSharing', () => {
    socket.broadcast.emit('startSharing');
  });

  socket.on('stopSharing', () => {
    socket.broadcast.emit('stopSharing');
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
