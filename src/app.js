const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('dotenv').config();

require('./dbs/mongodb');

app.use('/', require('./routes/index'));

module.exports = app;
