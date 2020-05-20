var express = require('express');
var serveStatic = require('serve-static');
const bodyParser = require('body-parser');

app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);
