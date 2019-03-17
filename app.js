const db = require('./database/db')
let zipcode = require('./database/models/zipcode.js').model
let user = require('./database/models/user.js').model
let item = require('./database/models/item').model
let basketItem = require('./database/models/basket-item').model

const itemSeed = require('./database/seeds/item_seed')

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
    
    item = connection.define('item', item)
    basketItem = connection.define('basket_item', basketItem)


    user.hasMany(basketItem)

    basketItem.belongsTo(user)

    item.hasMany(basketItem)

    basketItem.belongsTo(item)

   // itemSeed.seed(item)

    // dataImport.getZipCodes((zipcodes) => {
    //     zipcode.bulkCreate(zipcodes)
    // }) 
    
    connection.sync().then(() => {
        console.log('DB Synced..')
    })

    api.initialize(zipcode, user, item, basketItem);

}

initialize();