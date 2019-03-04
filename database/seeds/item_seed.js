const Sequelize = require('sequelize')

module.exports.seed = function(item) {
    item.create({name: "Kildemoes", price: 5000, description: "En herrecykel i god stand fra 1996", type: "Herrecykel"})
    item.create({name: "Mongoose", price: 5000, description: "Hvis denne BMX havde to hjul mere, ville det være en Ferrari ", type: "BMX"})
    item.create({name: "Centurion", price: 5000, description: "En virkelig hurtig cykel", type: "Herrecykel"})

}