require.config({
	paths: {
		"jquery": "lib/jquery-2.0.2.min",
		"underscore": "lib/underscore-min-1.4.4",
		"backbone": "lib/backbone-min-1.0.0",
		"text": "lib/text-2.0.6",
		"cards-model": "models/cards-model",
		"cards-view": "views/cards-view",
		"card-model": "models/card-model",
		"card-view": "views/card-view",
		"game-view": "views/game-view",
		"app": "app"
	},
	shim: {
		"underscore": {
			exports: "_"
		},
		"backbone": {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		}
	}
});

// require the app, which starts up memory
require(["app"]);