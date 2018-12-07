const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');
const positionLogin = require('./rotes/login');
const positionRoutes = require('./rotes/position');
const docRoutes = require('./rotes/doc');
const app = express();


app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', positionLogin);
app.use('/api/task', positionRoutes);
app.use('/api/doc', docRoutes);

module.exports = app;