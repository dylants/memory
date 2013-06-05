/* jshint browser:true */
/* global define:true */
define([
	"backbone",
	"underscore",
	"jquery",
	"card-model",
	"card-view",
	"text!../../templates/game.html"
],
function (Backbone, _, $, CardModel, CardView, gameHtml) {
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

			// add some cards
			for (counter=0; counter<4; counter++) {
				this.addCard();
			}

			return this;
		},

		addCard: function() {
			var cardModel = new CardModel();
			var cardView = new CardView({model: cardModel});
			$("#cards").append(cardView.render().el);
		}
	});
});