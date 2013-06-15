/* jshint browser:true */
/* global define:true */
define([
	"backbone",
	"underscore",
	"jquery",
	"card-model",
	"card-view",
	"text!../../templates/cards.html",
	"text!../../templates/card-row.html"
],
function (Backbone, _, $, CardModel, CardView, cardsHtml, cardRowHtml) {
	"use strict";

	return Backbone.View.extend({

		el: "#cards",

		template: _.template(cardsHtml),
		cardRowTemplate: _.template(cardRowHtml),

		initialize: function() {
		},

		render: function() {
			// render our game view outline
			this.$el.html(this.template());

			// add the cards
			this.addCards();

			return this;
		},

		addCards: function() {
			var rowCounter, cardCounter, tableSelector, rowSelector, rowId, numRows;

			tableSelector = $("#cards-table");

			// so we'll expect the number of cards to be a
			// square of a number 2 - 5 (for now), so either:
			// 4, 9, 16, 25
			// The number of rows is then:
			// 2, 3, 4, 5
			// Which is the square root of the number of cards
			numRows = Math.sqrt(this.model.get("numCards"));

			for (rowCounter=0; rowCounter<numRows; rowCounter++) {
				// create a row
				rowId = "row" + (rowCounter + 1);
				tableSelector.append(this.cardRowTemplate({"rowId": rowId}));

				// and the number of cards per row would be the same
				// as the number of rows:
				// 2*2=4, 3*3=9, etc
				for (cardCounter=0; cardCounter<numRows; cardCounter++) {
					this.addCard(rowId);
				}
			}
		},

		addCard: function(rowId) {
			// create a new card model and view
			var cardModel = new CardModel();
			var cardView = new CardView({model: cardModel});
			// append it to the table row
			$("#" + rowId).append(cardView.render().el);
		}
	});
});