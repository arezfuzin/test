/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.alterColumn('api_request_log', 'status', { type: 'string', notNull: true });
};
