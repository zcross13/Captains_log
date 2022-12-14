require('dotenv').config() //this method throws whatever in .env into process.env  
//Load express
const express = require('express')
const methodOverride = require('method-override') //function use to check if post request is PUT or DELETE // 
const db = require('./models/db')
// reminder to check package.json for install
// const Log = require('./models/log') //remove model when you create routeController you no longer need it the routeController will contain it 

// Create express app 
const app = express()

// Configure the app (app.set)
/* Start Config */
app.use(express.urlencoded({ extended: true })) //this code make us req.body 
app.use((req,res,next) => { //need for routeController file 
    res.locals.data = {}  //every route will have access to this to put data into 
    next()
})
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())
db.once('open', () =>{
    console.log('connected to MongoDB Atlas')
})

// Mount middle (app.use)
app.use(methodOverride('_method')) //call method-override //need to change post request to DELETE or UPDATE request 
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'
app.use('/logs', require('./controllers/routeController')) //imports routeController in to server.js, this is helpful so you dont have 6000 lines of code in the server.js; also always for us to work on multiple files 


// // Routes --- INDUCES 

// // Index 
// app.get('/logs', (req, res) => {
//     Log.find({}, (err, foundLogs) => {
//         if (err) {
//             console.error(err)
//             res.send(400).send(err)
//         } else {
//             res.render('logs/Index', {
//                 logs: foundLogs
//             })
//         }
//     });
// });

// // New route --- New.jsx 
// app.get('/logs/new', (req, res) => {
//     res.render('logs/New')
// })

// // Delete
// app.delete('/logs/:id', (req, res) => {
//     Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
//         if (err) {
//             res.status(400).send(err)
//             console.log(err)
//         } else {
//             res.redirect('/logs')
//         }
//     })
// })
// // Update 
// app.put('/logs/:id', (req, res) => {
//     req.body.shipIsBroken === 'on' || req.body.shipIsBroken === true ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
//     Log.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLog) => {
//         if (err) {
//             res.status(400).send(err)
//             console.log(err)
//         } else {
//             res.redirect(`/logs/${updatedLog._id}`)
//         }
//     })
// }) //{new: true} to get the updated fruit; if not then you get the original log 
// // Create
// app.post('/logs', (req, res) => {
//     req.body.shipIsBroken === 'on' ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
//     Log.create(req.body, (err, createdLog) => {
//         if (err) {
//             res.status(400).send(err)
//         } else {
//             res.redirect('/logs')
//         }
//     })
// })

// // Edit //same as show route 
// app.get('/logs/:id/edit', (req, res) => {
//     Log.findById(req.params.id, (err, foundLog) => {
//         if (err) {
//             console.error(err)
//             res.status(400).send(err)
//         } else {
//             res.render('logs/Edit', {
//                 log: foundLog
//             })
//         } console.log(foundLog)
//     })
// })
// // Show 
// app.get('/logs/:id', (req, res) => {
//     Log.findById(req.params.id, (err, foundLog) => {
//         if (err) {
//             console.error(err)
//             res.status(400).send(err)
//         } else {
//             res.render('logs/Show', {
//                 log: foundLog
//             })
//         }
//     })
// })

// The Port
app.listen(3000, () => {
    console.log('Listening on Port 3000')
})

