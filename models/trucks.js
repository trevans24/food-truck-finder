module.exports = function(sequelize, Sequelize){
	var Trucks = sequelize.define('truck', {
	name: Sequelize.STRING,
		img_link: Sequelize.STRING,
		description: Sequelize.STRING,
		food_type: Sequelize.STRING,
		menu_link: Sequelize.STRING,
		phone: Sequelize.STRING,
		latitude:Sequelize.STRING,
		longitude:Sequelize.STRING
});
	return Trucks;
};