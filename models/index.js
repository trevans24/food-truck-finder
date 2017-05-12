// SQL db =  'foodTrucks';
var Sequelize = require('sequelize');


var sequelize = new Sequelize('postgres://alexiohearn@localhost:5432/foodtrucks');



// var sequelize = new Sequelize('postgres://alexiohearn@localhost:5432/foodtrucks');
// var sequelize = new Sequelize('postgres://AllieG@localhost:5432/foodtrucks');
// var sequelize = new Sequelize('postgres://troy@localhost:5432/foodtrucks');



if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    logging:  true //false
  });
} else {
  // the application is executed on the local machine
  sequelize = new Sequelize('postgres://AllieG@localhost:5432/foodtrucks');
}

// HEROKU: Username: znvzuadyvotpkn
// HEROKU: DB_NAME: d1r1qjr0qvq8v9

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var Trucks = sequelize.import('./trucks.js');

var Drivers = sequelize.import('./drivers.js');

Trucks.belongsTo(Drivers);
Drivers.hasOne(Trucks);


module.exports.models = {
	Trucks: Trucks,
	Drivers: Drivers
};

//Created postgresql-flexible-86510 as DATABASE_URL