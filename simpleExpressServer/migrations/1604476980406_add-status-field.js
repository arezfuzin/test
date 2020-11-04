/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.addColumns('api_request_log', {
        status: { type: 'boolean', notNull: true },
    });
};
