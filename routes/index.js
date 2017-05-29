var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')
var linkQuery = require('../db/linkQuery')
const knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('running on port 3000');
  const num = Math.floor((Math.random() * 5) + 1);
  const titles = [{
    title: "Point Richmond Apartments",
    subtitle: "Welcoming You Soon"
  },
  {
    title: "Point Richmond Apartments",
    subtitle: "Making Local Social"
  },
  {
    title: "Point Richmond Apartments",
    subtitle: "Fit Your Lifestyle"
  },
  {
    title: "Point Richmond Apartments",
    subtitle: "Live Comfortably"
  },
  {
    title: "Point Richmond Apartments",
    subtitle: "Say 'Hello' to Modern"
  },
  {
    title: "Point Richmond Apartments",
    subtitle: "Your Home, Simplified"
  }
]
  res.render('index', titles[(num)]);
});


router.post('/send', function(req, res, next) {

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'brentthomas.c@gmail.com',
      pass: 'codeIsLife16'
    }
  })

  var message = {
    from:'John Doe <johndoe@gmail.com>',
    to: 'brentthomas.c@gmail.com',
    subject: 'Testing Node Emailer',
    text: 'This is simply testing the submission form',
    html: '<p> You got a new email with the following details:</p><ul><li></li>Name: '+req.body.fname+' <li>Email: '+req.body.email+'</li></ul>'
  }

  linkQuery.newSubscriber(req.body)
.then(()=>{
  transporter.sendMail(message, function(error, body) {
    if(error) {
      console.log(error);
      res.redirect('/')
    } else {
      console.log('Message Sent '+ body.response);
      res.redirect('/')
    }
  })
})
})

module.exports = router;
