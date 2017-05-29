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
      user: 'pointrichmondapartments@gmail.com',
      pass: 'thisispassword'
    }
  })

  var message = {
    from:'Leasing Office <pointrichmondapartments@gmail.com>',
    to: req.body.email,
    subject: 'Point Richmond Apartments',
    html: '<h3>Hello '+req.body.fname+',</h3> '+' <p> Thank you for subscribing to the Point Richmond Apartments. We are happy to have you on board!</p> '+' <p>The complex is currently under construction and we will be providing you throuhgout with pictures and information about leasing as well as community events.</p> <br> <h5>Sincerely,</h5> <br> <strong><p>The Point Richmond Apartment Team</p></strong>'
    // html: 'Embedded image: <img src="cid:pointrichmondapartments@gmail.com"/>',
    // attachments: [{
    //     filename: 'thepoint.png',
    //     path: '../public/images/',
    //     cid: 'pointrichmondapartments@gmail.com' //same cid value as in the html img src
    // }]
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

router.get('/database', function(req, res, next) {
  knex('subscribers')
    .select()
    .then(subscriber => {
      res.render('databaseSubscribers', { subscriber });
    })
})

module.exports = router;
