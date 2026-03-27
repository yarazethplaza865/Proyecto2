const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'BD_postgre',
  password: 'Fimaz2024@',
  port: 5432,
});

module.exports = pool;