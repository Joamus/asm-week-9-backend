const converter = require('@ridi/object-case-converter');

const webTokens = require('../auth/web-tokens')

module.exports.postUser = function(userModel, req, res) {
    const user = converter.decamelize(req.body);

    userModel.create(user).then((result) => {
        res.json({message: "User successfully created"})

    }).catch((errorResult) => {
        res.send(errorResult)
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