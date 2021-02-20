const http = require('http');
const express = require('express');
const ejs = require('ejs');
const { Client } = require('pg');

const app = express();

app.set("view engine", "ejs");

const client = new Client({
  database: "bookshelf",
  user: "master",
  password: "Decjapan001",
  port: 11111,
});

app.get('/', (req, res) => {

  client
    .connect()
    .then(() => console.log("connected"))
    .then(() => client.query("SELECT *  FROM testtable"))
    .then(result => {
      console.log(result.rows[0].id)
      res.render("./index.ejs", {
        test: result.rows[0].id,
      });

  })
});

const server = http.createServer(app);

server.listen('3000', () => {
  console.log('Server is running...');
});