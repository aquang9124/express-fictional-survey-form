// require express
var express = require("express");
// path module
var path = require("path");
// create the express app
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
	res.render("index");
});

app.post("/result", function(req, res) {
	var userData = {
		name: req.body.name,
		location: req.body.location,
		language: req.body.language,
		comment: req.body.comment
	};

	res.render("result", { userdata: userData });

});

// tell the express app to listen on port 8000
app.listen(8000, function() {
	console.log("Listening on port 8000");
});