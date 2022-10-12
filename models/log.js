const mongoose = require('mongoose')


// Schema -cannot do 
const logSchema = new mongoose.Schema({ //instance of the schema class 
    title: {type: String, required: true}, 
    entry: {type: String, required:true}, 
    shipIsBroken: Boolean
}, {timestamps: true})


// Model -allow you to do CRUD capability 
const Log = mongoose.model('Log', logSchema)

module.exports = Log