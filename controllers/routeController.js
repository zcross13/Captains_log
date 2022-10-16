// Start out router 
// Import Express 
const express = require('express') // so we can create the router
//only the router none of the other app stuff 
const router = express.Router()
// Need the model because the job of the model is to give us access to DB 
const Log = require('../models/log')
// Routes 

// Index
router.get('/', (req, res) =>{
    // use Fruits model to get al Fruits 
    Log.find({}, (err, foundLogs) => {
        if(err){
            res.status(400).send(err)
            console.error(err)
        } else {
            res.render('logs/Index', {
                logs: foundLogs
            })
        }
    })
})
// New
router.get('/new', (req,res) =>{
    res.render('logs/New')
})
// Delete
router.delete('/:id', (req,res) => {
    Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
        if(err){
            res.status(400).send(err)
            console.error(err)
        } else {
            res.redirect('/logs')
        }
    })
})
// Update
router.put('/:id/', (req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === 'on' ? req.body.shipIsBroken = true : false; 
    Log.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedLog) =>{
        if(err){
            console.error(err)
            res.status(400).send(err)
        } else {
            res.redirect(`/logs/${updatedLog._id}`)
        }
    })
})
// Create
router.post('/',(req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === 'on'? true:false; //req.body = to eat ? if yes 'req.body.shipIsBroke' equal true if not 'it' equal false 
    Log.create(req.body, (err, createdLog) => {
        if(err){
            res.status(400).send(err)
            console.error(err)
        } else {
            res.redirect(`/logs/${createdLog._id}`)
        }
    })
})
// Edit
router.get('/:id/edit', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) =>{
        if(err){
            res.status(400).send(err)
            console.error(err)
        } else {
            res.render('logs/:id/edit', {
                log: foundLog
            })
        }
    })
}) 
// Show
router.get('/:id', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if(err){
            console.error(err)
            res.status(400).send(err)
        } else {
            res.render('logs/Show', {
                log: foundLog
            })
        }
    })
})


module.exports = router 