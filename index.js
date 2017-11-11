var express = require("express");
var app = express();


app.listen(50000);

app.use(express.static(__dirname + '/public'));

