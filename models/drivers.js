module.exports = function(sequelize, Sequelize){
	var Drivers = sequelize.define('drivers', {
		name: Sequelize.STRING
});
	return Drivers;
};