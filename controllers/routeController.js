// Start out router 
// Import Express 
const express = require('express') // so we can create the router
//only the router none of the other app stuff 
const router = express.Router()
// Need the model because the job of the model is to give us access to DB 
const dataController = require('./dataController')
const viewController = require('./viewController')

// Routes 

// Index 
router.get('/', dataController.index, viewController.index)
// New 
router.get('/new', viewController.newView)
// Delete 
router.delete('/:id', dataController.delete, viewController.redirectHome)
// Update
router.put('/:id', dataController.update, viewController.redirectShow)
// Create
router.post('/', dataController.create, viewController.redirectHome)
// Edit 
router.get('/:id/edit', dataController.show, viewController.edit )
// Show 
router.get('/:id', dataController.show, viewController.show)

module.exports = router 