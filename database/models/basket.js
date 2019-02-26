const Sequelize = require('sequelize')


module.exports.model = {
    

    user_id : {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id',
        }

    },

    item_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Item,
            key: 'id'
        }
    }
}