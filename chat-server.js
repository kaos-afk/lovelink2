const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path'); // path modülünü kullanıyoruz

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Statik dosyaları public klasöründen sunuyoruz
app.use(express.static(path.join(__dirname, 'public')));

// Ana sayfa için index.html dosyasını manuel olarak gönderiyoruz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));  // Bu yolu doğru şekilde yazıyoruz
});

io.on('connection', (socket) => {
  console.log('Bir kullanıcı bağlandı');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Bir kullanıcı ayrıldı');
  });
});

server.listen(3000, () => {
  console.log('Sunucu http://localhost:3000 adresinde çalışıyor');
});
