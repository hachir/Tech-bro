const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const exphbs = require('express-handlebars');
const scraper = require("./scripts/scraper");
const logger = require("morgan");
const db = require("./models");

// Routers
const indexRouter = require('./routes/htmlRoutes');
const apiRouter = require('./routes/apiRoutes');
const scrapeRouter = require('./routes/scrapeRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Configure static directory
app.use(express.static("public"));

// Configure logging middleware
app.use(logger('dev'));