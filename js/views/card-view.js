/* jshint browser:true */
/* global define:true */
define([
	"backbone",
	"underscore",
	"jquery",
	"text!../../templates/card.html"
],
function (Backbone, _, $, cardHtml) {
	"use strict";

	return Backbone.View.extend({

		tagName: "td",

		template: _.template(cardHtml),

		events: {
			"click .card": "flip"
		},

		initialize: function() {
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		flip: function() {
			$(this.el).find(".card").toggleClass("flipped");
		}
	});
});