/*jshint esversion:6*/

const express = require('express');
const handlebars = require('express-handlebars');
const bubbleSorter = require('./routes/bubbleSorter');
const bodyParser = require('body-parser');
const quesrystring = require('quesryString');
let app = express();

app.use(bodyParser.urlencoded({extended: false}));

const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'index'
});

app.use();

app.get();

app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');

module.exports = app;