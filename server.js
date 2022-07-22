//server

//for environment file (no need for replit)
//require('dotenv').config();

//requirements
const express = require('express');
const bodyParser = require('body-parser');
const expect = require('chai');
const helmet = require('helmet');
const nocache = require('nocache');
const cors = require('cors');

//imports
const routes = require('./routes/routes.js');

//database connection
require('./database/db-connection.js');

//express app
const app = express();
app.use('/public', express.static(process.cwd() + '/public'));
//app.use('/assets', express.static(process.cwd() + '/assets'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
routes(app);

//404 Error
app.use(function(req, res, next) {
  res.status(404)
		.type('text')
		.send('Server is so down')
});

//listener
const portNum = process.env.PORT || 3000;
const server = app.listen(portNum, () => {
	console.log(`Listening on port ${portNum}`);
});