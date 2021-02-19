const http = require('http');
const express = require('express');
const ejs = require('ejs');

const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render("./index.ejs", {
    test: "Hello world!!!",
  })
})

const server = http.createServer(app);

server.listen('3000', () => {
  console.log('Server is running...');
});