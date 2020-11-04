const pool = require('../database');

module.exports = {
    async apiRequestLog(req, status) {
        const result = await pool.query(`
            INSERT INTO "api_request_log" ("endpoint", "query", "status") VALUES ($1, $2, $3)
        `, [req.path, JSON.stringify(req.query), status]);

        return result.rows;
    },
};
