const db = require('./database/db')
const zipcode = require('./database/models/zipcode.js')
const dataImport = require('./database/data-import')

let connection;
let zipcodeModel;



function initialize() {
    connection = db.initialize();
    connection.authenticate()
    .then(() => {
        console.log('Success with authenticating the database')
    })
    .catch(() => {
        console.log('Failed authenticating the database')
    });

    zipcode.initialize(connection, (zipcode) => {
        zipcodeModel = zipcode;

        dataImport.getZipCodes((zipcodes) => {
            zipcodeModel.bulkCreate(zipcodes)
            .then(() => {
                console.log("Zipcodes created")
            })

        })
    });
}

initialize();