const express = require('express')
const router = express.router
const {User} = require('../models/user')

router.post('/', async(req, res)=>{
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('Usuario o contraseña incorrecta')

    if(user.password !== req.body.password) return res.status(400).send('Usuario o contraseña incorrecta')
    
    const jwtToken = user.generateJWT()
    res.status(200).send({jwtToken})
})

module.exports = router