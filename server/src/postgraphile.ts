import { postgraphile } from "postgraphile"

const { DATABASE, PG_USER, PASSWORD, HOST } = process.env

console.log(PG_USER)

module.exports = postgraphile(
  {
    database: DATABASE,
    user: PG_USER,
    password: PASSWORD,
    host: HOST,
    port: 11111
  },
  'public',
  {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
  }
)
