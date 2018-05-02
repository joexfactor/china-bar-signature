// server.js
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);



//Email Function.
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var nodemailer = require('nodemailer');
app.post('/contact', function (req, res) {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "chinabarbuffet@gmail.com",
      pass: "chinabar_2018"
    }
  });

  var data = req.body;

  var mailToOptions = {
    from: data.name + " <" + data.email + ">", // sender address,
    to: "ChinaBar Burwood <chinabarbuffet@gmail.com>",
    subject: 'Feedback from ' + data.name,
    text: data.message
  };

  var mailFromOptions = {
    from: "ChinaBar Burwood <chinabarbuffet@gmail.com>", // sender address,
    to: data.name + " <" + data.email + ">",
    subject: 'Feedback Received',
    text: 'Thank you for your feedback!'
  };

  // send mail with defined transport object
  transporter.sendMail(mailToOptions, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Got feedback from: " + data.name);
    }
  });

  transporter.sendMail(mailFromOptions, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Confirmation Sent!");
    }
  });
  transporter.close(); 
});
