//express app that servers html file

var express = require('express');
var path = require('path');
var app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, function() {
    console.log('Server running on port ' + 3000);
});     







