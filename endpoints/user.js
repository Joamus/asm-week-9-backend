const converter = require('@ridi/object-case-converter');

const webTokens = require('../auth/web-tokens')

module.exports.postUser = function(userModel, zipcodeModel, req, res) {
    const user = converter.decamelize(req.body);

    zipcodeModel.findOne({
      where: {
        postnr: user.postnr
      }
    }).then((result) => {
      if (result) {
        userModel.create(user).then((result) => {
          res.json({message: "User successfully created"})
  
      }).catch((errorResult) => {
          res.json({message: "Fejl med oprettelse"})
      })
        
      } else {
        res.status(404).json({message: "Zipcode does not exist", type: "zip_invalid"})

      }
      

    }).catch((zipErrorResult) => {
      res.status(404).json({mesasge: "Zipcode does not exist"})
    })

    
}

module.exports.login = function(userModel, req, res) {
    if(req.body.username && req.body.password) {
      userModel.findOne({
        where: {
          username: req.body.username,
          password: req.body.password
        },
        attributes: ['id', 'username']
      })
      .then(users => {
        let jsonUsers = JSON.parse(JSON.stringify(users))
        let token = webTokens.generateToken(jsonUsers)
        jsonUsers.token = token;
        console.log(webTokens.verifyToken(token))
        res.send(jsonUsers);
      })
      .catch(error => {
        res.status(404).send(error);
      })
    } else {
        res.status(404).send("error");
    }
}