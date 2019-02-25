const Sequelize = require('Sequelize')

let zipcode;

module.exports.initialize = function(connection, callback) {

    zipcode = connection.define('zipcode', {
        datafordelerOpdateringstid: {
            type: Sequelize.DATE
        },
        forretningshændelse: {
            type: Sequelize.INTEGER
        },
        forretningsområde: {
            type: Sequelize.STRING
        },
        id_lokalId: {
            type: Sequelize.STRING
        },
        id_namespace: {
            type: Sequelize.STRING
        },
        navn: {
            type: Sequelize.STRING
        },
        postnr: {
            type: Sequelize.STRING
        },
        postnummerinddeling: {
            type: Sequelize.STRING
        },
        registreringFra: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.INTEGER
        },
        virkningFra: {
            type: Sequelize.DATE
        },
        virkningsaktør: {
            type: Sequelize.STRING
        }
    });
    
    zipcode.sync({force: true}).then(() => {
        console.log('Zipcode table created..')
        callback(zipcode)
    })

}


