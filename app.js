const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"})
  res.write("Hello Express")+
  res.end();
})

const server = http.createServer(app);

server.listen('3000', () => {
  console.log('Server is running...');
});