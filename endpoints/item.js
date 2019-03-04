const converter = require('@ridi/object-case-converter');


module.exports.getItems = function(itemModel, req, res) {
    itemModel.findAll({}).then((result) => {
        let items = JSON.parse(JSON.stringify(result))
        res.send(converter.camelize(items))
    })
    .catch((errorResult) => {
        res.send(errorResult)
    })
}


