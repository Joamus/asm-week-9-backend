const Sequelize = require('sequelize')

module.exports.model = {

    username: {
        type: Sequelize.STRING,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    password: {
        type: Sequelize.STRING
    },
    street_name: {
        type: Sequelize.STRING
    },
    street_number: {
        type: Sequelize.STRING
    },
    zip: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    }
}