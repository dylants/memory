/* jshint browser:true */
/* global define:true */
define([
	"backbone",
	"underscore",
	"jquery",
	"cards-model",
	"cards-view",
	"text!../../templates/game.html"
],
function (Backbone, _, $, CardsModel, CardsView, gameHtml) {
	"use strict";

	return Backbone.View.extend({

		el: "#game-view",

		template: _.template(gameHtml),

		initialize: function() {
		},

		render: function() {
			var counter;

			// render our game view outline
			this.$el.html(this.template());

			// add the cards, hard coding to 4
			this.addCards(4);

			return this;
		},

		addCards: function(numCards) {
			var cardsModel = new CardsModel({"numCards": numCards});
			var cardsView = new CardsView({model: cardsModel});
			$("#cards").append(cardsView.render().el);
		}
	});
});