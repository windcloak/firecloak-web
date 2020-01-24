const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

const APP_NAME = 'Firecloak Contact Form';

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});


exports.sendEmail = functions.firestore
    .document('contact/{id}')
    .onCreate((snap, context) => {
      // Get an object representing the document
      const user = snap.data();

      const email = user.email;
      const name = user.name;
      const message = user.message;
    
      return sendEmailNotif(email, name, message);
    });

    // Sends email notification
async function sendEmailNotif(email, name, message) {
    const mailOptions = {
      from: email,
      to: 'xfirecloak@gmail.com',
      subject: `${APP_NAME}`,
      text: `From ${name} Message: ${message}`
    };

    await mailTransport.sendMail(mailOptions);
    console.log('New welcome email sent to:', email);
    return null;
  }
  