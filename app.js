const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const positionRoutes = require('./rotes/position');
const docRoutes = require('./rotes/doc');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/task', positionRoutes);
app.use('/api/doc', docRoutes);

module.exports = app;