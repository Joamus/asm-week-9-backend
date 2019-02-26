const converter = require('@ridi/object-case-converter');

module.exports.postUser = function(userModel, req, res) {
    const user = converter.decamelize(req.body);

    userModel.create(user).then((result) => {
        res.json({message: "User successfully created"})

    }).catch((errorResult) => {
        res.send(errorResult)
    })
}