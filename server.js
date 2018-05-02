// server.js
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);


const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

var nodemailer = require('nodemailer');
app.post('/contact', function(req, res) {
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.message);
  });