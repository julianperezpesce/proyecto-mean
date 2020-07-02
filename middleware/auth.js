const jwt = require('jsonwebtoken')

function auth(req, res, next) {
    let jwtToken = req.header('Authorization')
    if(!jwtToken) return res.status(401).send('Acceso denegado')
    jwtToken = jwtToken.split(' ')[1]
    if(!jwtToken) return res.status(401).send('Acceso denegado')

    try {
        const payload = jwt.verify(jwtToken, "secretKey")
        req.user = payload
        next()
    } catch (error) {
        res.status(400).send('Acceso denegado. Token no válido')
    }
}

module.exports = auth