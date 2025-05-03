let express = require('express');
let app = express();

// console.log('Hello World!');

// app.get('/', function(req, res) {
//     res.sendFile(absolutePath);
//   });

absolutePath = __dirname + '/public'

app.use('/public', express.static(absolutePath))




































 module.exports = app;
