require('dotenv').config()
require ('body-parser');

const bodyParser = require('body-parser');
let express = require('express');
let app = express();

// console.log('Hello World!');

// app.get('/json', function(req, res) {

//     let message = "Hello json";

//     if (process.env.MESSAGE_STYLE === "uppercase") {
//         message = message.toUpperCase();
//       } 
//     res.json({
//         message
//     })
//   });

// absolutePath = __dirname + '/json'

// app.use('/json', express.static(absolutePath))

// app.use(function(req, res, next){
//     console.log(req.method + " " + req.path + " - " + req.ip);
//     next();
// })

// app.get('/now', function(req, res, next){
//     req.time = new Date().toString();
//     next();
// },
// function(req, res){
//     res.json({
//         time: req.time
//     })
// })

// app.get('/:word/echo', function(req, res){
//     res.json({
//         echo: req.params.word
//     })
// })

// app.get('/name', function(req, res){
//     res.json({
//         name: req.query.first + " " + req.query.last
//     })
// })

// Use body-parser to Parse POST Requests

// bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Get Data from POST Requests

app.post('/name', function(req, res){
    res.json({
        name: req.body.first + " " + req.body.last
    })
})






























 module.exports = app;
