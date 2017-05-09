module.exports = function(sequelize, Sequelize){
	var Users = sequelize.define('users', {
		name: Sequelize.STRING
});
	return Users;
};