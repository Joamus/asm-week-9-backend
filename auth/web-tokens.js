'use strict'

const fs = require('fs')
const jwt = require('jsonwebtoken')

module.exports.generateToken = function(payload) {

    let privateKey = fs.readFileSync('./auth/private.key', 'utf8')

    let signOptions = {
        issuer: 'gjk portal',
        audience: 'http://gjk.dk',
        algorithm: "RS256"
    }

    let token = jwt.sign(payload, privateKey, signOptions)
    return token;

}

module.exports.verifyToken = function(token) {

    let publicKey = fs.readFileSync('./auth/public.key', 'utf8')
    

    let verifyOptions = {
        issuer: 'gjk portal',
        audience: 'http://gjk.dk',
        algorithm: ["RS256"]
    }

    let legit = jwt.verify(token, publicKey, verifyOptions)
    return legit;

}

