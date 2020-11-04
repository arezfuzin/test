const app = require('./app');
const { logger } = require('./libs/logger');

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
    logger.info(`App server now listening on port ${port}`);
});

module.exports = server;
