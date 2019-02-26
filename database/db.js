const sequelize = require('sequelize');

module.exports.initialize = function() {
  const define = {
      freezeTableName: true,
      underscored: true,

  }

    return new sequelize('assignment_week_9', 'root', '', {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false,
        define,
        
      
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
      
        // SQLite only
      });
}


