//Mongo-DB database models

const mongoose = require('mongoose');

const date = new Date();

//round schema
const roundSchema = new mongoose.Schema({
	score: {type: Number},
	roundNumber: {type: Number},
	win: {type: Boolean}
});
const Round = mongoose.model("Round", roundSchema);

//game schema
const gameSchema = new mongoose.Schema({
	date: {type: Date, default: date},
	round: {type: [roundSchema]}
});
const Game = mongoose.model("Game", gameSchema);

//player schema
const playerSchema = new mongoose.Schema({
	name: {type: String},
	created_on: {type: Date, default: date},
	games: {type: [gameSchema]}
});
const Player = mongoose.model("Player", playerSchema);

exports.player = Player;
exports.game = Game;
exports.round = Round;