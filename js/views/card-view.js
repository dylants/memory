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

		className: "card",

		template: _.template(cardHtml),

		initialize: function() {
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
});