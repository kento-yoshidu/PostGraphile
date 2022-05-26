import { postgraphile } from "postgraphile"

const { DATABASE, PG_USER, PASSWORD, HOST } = process.env

module.exports = postgraphile(
  {
    database: DATABASE,
    user: PG_USER,
    password: PASSWORD,
    host: HOST,
    port: 5432
  },
  'public',
  {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
  }
)
