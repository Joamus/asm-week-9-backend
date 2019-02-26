const Sequelize = require('sequelize')

module.exports.model = {
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
};
    


