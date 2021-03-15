const http = require('http');
const express = require('express');
const ejs = require('ejs');
const { Client } = require('pg');
const fetch = require('node-fetch');
const { readSync } = require('fs');

const app = express();

app.set("view engine", "ejs");

const client = new Client({
  database: "bookshelf",
  user: "master",
  password: "Decjapan001",
  port: 11111,
});

client.connect();

app.get('/', (req, res) => {

    client.query("SELECT *  FROM testtable")
    .then(result => {
      searchBook();
      console.log(result.rows[0].id)
      res.render("./index.ejs", {
        test: result.rows[0].id,
      });

  })
});

// APIシュトク

const searchBook = async () => {
  const endpoint = "'https://www.googleapis.com/books/v1'";
  const apiResponse = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:9784043636037`);
  const data = await apiResponse.json();

  console.log(data.items)
}

const server = http.createServer(app);

server.listen('3000', () => {
  console.log('Server is running...');
});