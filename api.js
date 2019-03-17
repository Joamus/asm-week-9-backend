const express = require('express')
express.json()

const app = express()
app.use(require('body-parser').json())
app.use(require('cors')())

app.options('/api/*')

app.use(function (req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate, max-age=120');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next()
});

const webTokens = require('./auth/web-tokens')

const port = 3000;

const userEndpoint = require('./endpoints/user.js')
const itemEndpoint = require('./endpoints/item')
const basketItemEndpoint = require('./endpoints/basket-item')

let zipcodeModel;
let userModel;
let itemModel;
let basketItemModel;


module.exports.initialize = function(zipcode, user, item, basket) {
    zipcodeModel = zipcode;
    userModel = user;
    itemModel = item;
    basketItemModel = basket

    app.all('/api/*', (req, res, next) => {
       // authenticateRequest(req, res, next)
       next();
      
    })

    endpoints();


}

function authenticateRequest(req, res, next) {
    if (req.path == '/api/login' || req.path == '/api/signup') {
      return next();
    }
    try {
      if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = webTokens.verifyToken(token)
        
        res.locals.user = decoded;
        if (res.locals.user) {
          next()
        }

        
      } else {
        res.status(401).json({message: 'Please provide valid token'})

      }
    } catch(err) {
      if (!decoded) {
        res.status(401).json({message: 'Please provide valid token'})
      }
    }
}


function endpoints() {

    app.post('/api/signup', (req, res) => {
        userEndpoint.postUser(userModel, zipcodeModel, req, res)

    })

    app.post('/api/login', (req, res) => {
        userEndpoint.login(userModel, req, res);
        
      });

    app.get('/api/item', (req, res) => {
        itemEndpoint.getItems(itemModel, req, res)
    })

    app.post('/api/basketItem', (req, res) => {
        basketItemEndpoint.postBasketItem(basketItemModel, req, res)
    })

    app.get('/api/basketItem', (req, res) => {
      basketItemEndpoint.getBasketItems(basketItemModel, itemModel, req, res)
    })

    app.listen(port);
    console.log(`Listening on port ${port}...`)

}



