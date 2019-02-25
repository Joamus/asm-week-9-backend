const sequelize = require('sequelize');

module.exports.initialize = function() {
    return new sequelize('uni', 'root', '', {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false,
      
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
      
        // SQLite only
      });
}


