var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');

var transport = {
    host: 'smtp.mailtrap.io', // Don’t forget to replace with the SMTP host of your provider
    port: 2525,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var last_name = req.body.last_name
  var first_name = req.body.first_name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${last_name} + ${first_name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: 'guanhanwn0@gmail.com',
    to: 'henryguan18@gmail.com',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    html: '<b>Hey there! </b>',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)