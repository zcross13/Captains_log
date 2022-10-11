//Load express
const express = require('express')

// Create express app 
const app = express()

// Configure the app (app.set)
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// Mount middle (app.use)


// Routes 
app.get('/logs', (req, res) => {
    res.send('<h1>Captains Log!</h1>');
});

app.get('/logs/new', (req,res) => {
    res.render('New')
})

// The Port
app.listen(3000, () => {
    console.log('Listening on Port 3000')
})

