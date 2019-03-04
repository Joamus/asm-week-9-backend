const converter = require('@ridi/object-case-converter');


module.exports.postBasketItem = function(basketItemModel, req, res) {
    let user = res.locals.user;


    basketItemModel.create({user_id: user.id, item_id: req.body.id, quantity: 1}).then((result) => {
        res.status(200).json({message: "Item added to basket"})
    }).catch((errorResult) => {

    })

}

module.exports.deleteBasketItem = function(basketItemModel, req, res) {

    basketItemModel.destroy({
        where: {
            id: req.body.id
        }

    }).then((result) => {
        res.status(200).json({message: "Item removed from basket"})
    }).catch((error) => {
        res.send(error)
    })
}

module.exports.getBasketItems = function(basketItemModel, itemModel, req, res) {
    let userId = res.locals.user.id;

    basketItemModel.findAll({
        where: {
            user_id: userId
        },
        include: {
            model: itemModel,
            required: true,
        }

    }).then((result) => {
        let basketItems = JSON.parse(JSON.stringify(result))
        res.send(converter.decamelize(basketItems))
    }).catch((errorResult) => {
        console.log(errorResult)

    })

}