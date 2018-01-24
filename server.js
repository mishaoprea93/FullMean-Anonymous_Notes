var express = require('express');
var app = express();
var session = require('express-session');
var path = require('path');
var port = 8000;
var bp = require('body-parser');

app.use(express.static(path.join(__dirname, '/client/dist')));
app.use(session({ secret: "session" }));
app.use(bp.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(port, function() {
    console.log("Listening on port 8000:")
})