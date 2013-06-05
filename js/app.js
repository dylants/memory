/*jshint browser:true */
/*global define:true */
define([
	"jquery",
	"game-view"
],
function($, GameView) {
	"use-strict";

	$(function() {
		// create and render the game
		var gameView = new GameView();
		gameView.render();
	});
});