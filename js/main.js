require.config({
	paths: {
		"jquery": "lib/jquery-2.0.2.min",
		"underscore": "lib/underscore-min-1.4.4",
		"backbone": "lib/backbone-min-1.0.0",
		"text": "lib/text-2.0.6",
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