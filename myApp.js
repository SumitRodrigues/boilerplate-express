require('dotenv').config()

let express = require('express');
let app = express();

// console.log('Hello World!');

app.get('/json', function(req, res) {

    let message = "Hello json";

    if (process.env.MESSAGE_STYLE === "uppercase") {
        message = message.toUpperCase();
      } 
    res.json({
        message
    })
  });

// absolutePath = __dirname + '/json'

// app.use('/json', express.static(absolutePath))




































 module.exports = app;
