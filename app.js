var express = require('express');
var app = express();
app.get('/', (req, res) => res.sendfile("index.html"))

// Configure server 
const port = process.env.PORT || 3000
var server = app.listen(port, "https://wild-ones.herokuapp.com/", function(req, res) {

    var host = server.address().address
    var port = server.address().port

    console.log(`Server running at http://${host}:${port}/`);
})