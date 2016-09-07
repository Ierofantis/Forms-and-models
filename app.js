var bodyParser = require("body-parser");
var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var session = require("express-session");
var app = express();


app.set("port", process.env.PORT || 8080);
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
  res.redirect('index.html');
});

app.listen(app.get("port"), function() {
  console.log("Server started on port " + app.get("port"));
});