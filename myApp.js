let express = require('express');
let app = express();

// console.log('Hello World!');

app.get('/json', function(req, res) {
    res.json({
        "message": "Hello json"
    })
  });

// absolutePath = __dirname + '/json'

// app.use('/json', express.static(absolutePath))




































 module.exports = app;
