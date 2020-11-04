const chalk = require('chalk');

module.exports = {
    logger: {
        info(message) {
            console.log(chalk.green('[info]:'), message);
        },
        error(message) {
            console.log(chalk.red('[error]:'), message);
        },
    },
};
