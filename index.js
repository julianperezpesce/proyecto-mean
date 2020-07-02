const express = require('express')
const mongoose = require('mongoose')

const user = require('./routes/user')
const auth = require('./routes/auth')
const task = require('./routes/task')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/user/', user)
app.use('/api/auth/', auth)
app.use('/api/task/', task)
app.use('/public/', express.static('public'))


const port = process.env.PORT || 3003
app.listen(port, ()=> console.log(`Escuchando puerto ${port}`))

mongoose.connect('mongodb://localhost/task', {
    useNewUrlParser: true, 
    useFindAndModify: false, 
    useCreateIndex: true, 
    useUnifiedTopology: true
})
    .then(()=> console.log('Conectado a MongoDB'))
    .catch(error => console.log('No se ha conectado a MongoDB'))