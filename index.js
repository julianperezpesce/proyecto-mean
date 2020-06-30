const express = require('express')
const mongoose = require('mongoose')


const user = require('./routes/user')

const app = express()
app.use(express.json())
app.use('/api/user/', user)

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Escuchando puerto ${port}`))

mongoose.connect('mongodb://localhost/task',{
    useNewUrlParser: true, 
    useFindAndModify: false, 
    useCreateIndex: true, 
    useUnifiedTopology: true
})
    .then(()=> console.log('Conectado a MongoDB'))
    .catch(error => console.log('No se ha conectado a MongoDB'))