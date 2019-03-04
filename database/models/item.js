const Sequelize = require('sequelize')


module.exports.model = {

    name: {
        type: Sequelize.STRING
    },

    price: {
        type: Sequelize.FLOAT,
    },

    description: {
        type: Sequelize.STRING
    },

    type: {
        type: Sequelize.STRING
    }


    
}