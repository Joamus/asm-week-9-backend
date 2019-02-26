const db = require('./database/db')
let zipcode = require('./database/models/zipcode.js').model
let user = require('./database/models/user.js').model

const dataImport = require('./database/data-import')
const api = require('./api.js')


let connection;


function initialize() {
    connection = db.initialize();
    connection.authenticate()
    .then(() => {
        console.log('Success with authenticating the database')
    })
    .catch(() => {
        console.log('Failed authenticating the database')
    });

    zipcode = connection.define('zipcode', zipcode)
    user = connection.define('user', user)
    


    dataImport.getZipCodes((zipcodes) => {
        zipcode.bulkCreate(zipcodes)
    })
    
    connection.sync().then(() => {
        console.log('DB Synced..')
    })

    api.initialize(zipcode, user);

}

initialize();