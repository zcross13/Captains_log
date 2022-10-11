//Load express
const express = require('express')

// Create express app 
const app = express()

// Routes 
app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
});

// The Port
app.listen(3000, () => {
    console.log('Listening on Port 3000')
})

