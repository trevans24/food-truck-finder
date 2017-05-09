// SQL db =  'foodTrucks';
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://AllieG@localhost:5432/foodtrucks');
//var sequelize = new Sequelize('postgres://<username>@localhost:5432/tunr_models');

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var Trucks = sequelize.import('./trucks.js');
var Users = sequelize.import('./users.js');
var Drivers = sequelize.import('./drivers.js');

Trucks.hasMany(Users);
Drivers.hasOne(Trucks);
Trucks.hasOne(Drivers);
Users.hasMany(Trucks);

module.exports.models = {
	Trucks: Trucks,
	Users: Users,
	Drivers: Drivers
};