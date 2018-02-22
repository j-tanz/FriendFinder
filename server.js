var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")
var app = express();
var dir = path.join(__dirname, 'app/public');
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static(dir));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("listening on : " + PORT);
});