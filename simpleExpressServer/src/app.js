require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const { authorization } = require('./middleware/authorization');
const { loggerMiddleware } = require('./middleware/loggerMiddleware');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(bodyParser.json({ limit: '5mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', loggerMiddleware, authorization, router);

module.exports = app;
