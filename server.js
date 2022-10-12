require('dotenv').config()
//Load express
const express = require('express')
const mongoose = require('mongoose')
const Log = require('./models/logs.js')

// Create express app 
const app = express()

// Configure the app (app.set)
/* Start Config */ 
app.use(express.urlencoded({ extended: true})) //this code make us req.body 
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology:true})
mongoose.connection.once('open', () => {
    console.log('connect to mongo')
})

// Mount middle (app.use)



// Routes --- INDUCES 

// Index 
app.get('/logs', (req, res) => {
    res.send('<h1>Captains Log!</h1>');
});

// New route --- New.jsx 
app.get('/logs/new', (req,res) => {
    res.render('logs/New')
})

// Delete

// Update 

// Create
app.post('/logs', (req,res) => {
    res.send(req.body)
    
})

// Edit 

// Show 


// The Port
app.listen(3000, () => {
    console.log('Listening on Port 3000')
})

