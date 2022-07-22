'use strict';

//imports
const playerModel = require('../database/models.js').player;
const gameModel = require('../database/models.js').game;
const roundModel = require('../database/models.js').round;

module.exports = function (app) {

	app.route('/')
		.get(function(req, res) {
			res.sendFile(process.cwd() + '/views/index.html');
		});

	app.route('/statistics')
		.get(function(req, res) {
			res.sendFile(process.cwd() + '/views/statistics.html');
		});
  
	app.route('/players')
		.get(function(req, res) {
			res.sendFile(process.cwd() + '/views/players.html');
		});
	
	app.route('/round')
		.get(function(req, res) {
			res.sendFile(process.cwd() + '/views/round.html');
		});
	
	app.get("*", function(req, res) {
		res.sendFile(process.cwd() + '/views/404.html');
	})
	
}