require('dotenv').config() //this method throws whatever in .env into process.env  
//Load express
const express = require('express')
const mongoose = require('mongoose')
const Log = require('./models/log')

// Create express app 
const app = express()

// Configure the app (app.set)
/* Start Config */ 
app.use(express.urlencoded({ extended: true})) //this code make us req.body 
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology:true})
mongoose.connection.once('open', () => { //listen to if we connect to mongoose 
    console.log('connect to mongo')
})

// Mount middle (app.use)



// Routes --- INDUCES 

// Index 
// app.get('/logs', (req, res) => {
//     res.send('<h1>Captains Log!</h1>');
// });

// New route --- New.jsx 
app.get('/logs/new', (req,res) => {
    res.render('logs/New')
})

// Delete

// Update 

// Create
app.post('/logs', (req,res) => {
    req.body.shipIsBroken === 'on' ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
    Log.create(req.body, (err, createdLog) =>{
        if(err){
            res.status(400).send(err)
        } else {
            res.redirect('/logs')
        }
    })
})

// Edit 

// Show 


// The Port
app.listen(3000, () => {
    console.log('Listening on Port 3000')
})

