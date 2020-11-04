const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DATABASE_HOST || 'localhost',
    user: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'postgres',
    database: process.env.DATABASE_NAME || 'postgres',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
});

module.exports = pool;
