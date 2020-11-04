const { logger } = require('../libs/logger');

module.exports = {
    loggerMiddleware(req, _, next) {
        logger.info({
            path: req.path,
            method: req.method,
            query: req.query,
            params: req.params,
            body: req.body,
        });

        next();
    },
};
