const axios = require('axios')

module.exports.getZipCodes = function(callback) {

    axios.get('https://services.datafordeler.dk/DAR/DAR/1/REST/postnummer?')
    .then((response) => {
        callback(response.data)

    })
    .catch((errorResponse) => {

    })
    
}



