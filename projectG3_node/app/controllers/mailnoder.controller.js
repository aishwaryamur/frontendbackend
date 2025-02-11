require("dotenv").config();
var nodemailer = require("nodemailer");
// const express=require('express');
// const app=express();

exports.mailsender = (req, res) => {
  emailId = req.body.email;
  score = req.body.score;
  var transporter = nodemailer.createTransport({
    host: process.env.SERVER,
    secure: false,
    port: 25, //587
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.EMAIL,
    to: emailId,
    // cc: "adityadho@cybage.com",
    subject: "Testing the Nodemailer here",
    html: "<h1> Email is featured here" + score + "</h1>",
  };

  transporter.sendMail(mailOptions, (error, success) => {
    if (error) {
      res.send([
        {
          result: "failed to send the mail here",
        },
      ]);
      console.log(error);
    } else {
      res.send([
        {
          result: "successfuly sent mail",
        },
      ]);
      console.log("Your email has been sent" + success.info);
    }
  });
};

// nodem('/sendmail',(req,res)=>{
//     var transporter= nodemailer.createTransport({
//         host:process.env.SERVER,
//         secure:false,
//         port:25, //587
//         tls:{
//             ciphers:'SSLv3',
//             rejectUnauthorized: false
//         },
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.PASSWORD
//         }
//     });

//     var mailOptions= {
//         from: process.env.EMAIL,
//         to:'adityadho@cybage.com',
//         cc:'adityadho@cybage.com',
//         subject:"Testing the Nodemailer here",
//         html:'<h1> Email is featured here </h1>'
//     }

//     transporter.sendMail(mailOptions, function(error, success) {
//         if (error)
//         {
//             // res.send([{
//             //     result: "failed to send the mail here"
//             // }]);
//             console.log(error);
//         }
//         else
//         {
//             // res.send([{
//             //     result: "successfuly sent mail"
//             // }]);
//             console.log("Your email has been sent" +success.info);
//         }
//     });
//  });
