const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email: String,
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})