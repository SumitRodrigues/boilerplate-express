require('dotenv').config()

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

app.get('/now', function(req, res, next){
    req.time = new Date().toString();
    next();
},
function(req, res){
    res.json({
        time: req.time
    })
})



































 module.exports = app;
