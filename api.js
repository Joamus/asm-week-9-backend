const express = require('express')
express.json()

const app = express()
app.use(require('body-parser').json())
app.use(require('cors')())

const port = 3000;

const userEndpoint = require('./endpoints/user.js')

let zipcodeModel;
let userModel;


module.exports.initialize = function(zipcode, user) {
    zipcodeModel = zipcode;
    userModel = user;

    endpoints();

    

}


function endpoints() {

    app.post('/api/user', (req, res) => {
        userEndpoint.postUser(userModel, req, res)

    })

    app.listen(port);
    console.log(`Listening on port ${port}...`)

}

