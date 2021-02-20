const http = require('http');
const express = require('express');
const ejs = require('ejs');
const pg = require('pg');

const app = express();

app.set("view engine", "ejs");

const pgPool = new pg.Pool({
  database: "bookshelf",
  user: "master",
  password: "Decjapan001",
  port: 11111,
});

const client = () => {
  return new Promise((resolve, reject) => {
    pgPool.connect((err, client) => {
      if (err) console.log(err)

      resolve(client)
    })
  })
}

app.get('/', (req, res) => {

  client().then(result => {
    console.log(result)

    res.render("./index.ejs", {
      test: result.user,
    });
  })
})

const server = http.createServer(app);

server.listen('3000', () => {
  console.log('Server is running...');
});