'use strict'

const  DB = require('../models').models;




// const truckCreate = function(){
// 	return DB.Trucks.create(
const trucksArray = [

	{
		name: 'carls jr.',
		img_link: 'http://www.carlsjr.co.nz/getattachment/62a7e415-c20a-4aed-8ffd-468ce9437dac/memphis-bbq/',
		description: 'not a truck',
		food_type: 'burgers',
		menu_link: 'www.carlsjr.com',
		phone: '123',
		latitude:39.758815,
		longitude:-105.002693
	},
	{
		name: 'Taco Ice Cream',
		img_link: 'http://static3.businessinsider.com/image/55fc68f7bd86ef11008bb735/in-n-out-president-explains-why-the-burger-chain-probably-wont-expand-to-the-east-coast.jpg',
		description: 'Serves Mexican entree Flavored Ice Cream, like burrito',
		food_type: 'gross',
		menu_link: 'www.carlsjr.com',
		phone: '4564564455',
		latitude:39.757139,
		longitude:-105.002872
	},
	{
		name: 'Flying Salads',
		img_link: 'http://www.carlsjr.co.nz/getattachment/62a7e415-c20a-4aed-8ffd-468ce9437dac/memphis-bbq/',
		description: 'Salads are served on a paper airplane plate that can fly, and you have to catch it before it hits the ground',
		food_type: 'burgers',
		menu_link: 'www.carlsjr.com',
		phone: '1234560000',
		latitude:39.759650, 
		longitude:-105.011794
	},
	{
		name: 'Sneaker Rubber',
		img_link: 'http://static3.businessinsider.com/image/55fc68f7bd86ef11008bb735/in-n-out-president-explains-why-the-burger-chain-probably-wont-expand-to-the-east-coast.jpg',
		description: 'serves recycled rubber',
		food_type: 'shoes',
		menu_link: 'www.carlsjr.com',
		phone: '8888888888',
		latitude:39.762001, 
		longitude:-105.011071
	},
	{
		name: 'Frozen Tacos',
		img_link: 'http://www.carlsjr.co.nz/getattachment/62a7e415-c20a-4aed-8ffd-468ce9437dac/memphis-bbq/',
		description: 'cold tacos, hot margaritas',
		food_type: 'frozen tacos',
		menu_link: 'www.carlsjr.com',
		phone: '123345678',
		latitude:39.757839, 
		longitude:-105.009618
	}
	];





const usersArray = [
	{
		name: 'Troy'
	},
	{
		name: 'Alexi'
	},
	{
		name: 'Cole'
	}
];

const driversArray = [
	{
		name: 'Troy T-Bone'
	},
	{
		name: 'Alexi Axelrod'
	},
	{
		name: 'Cole Ice-Road'
	}
];


function truckCreate(){
	return DB.Trucks.bulkCreate(trucksArray);
}
function addUsers(){
	return DB.Users.bulkCreate(usersArray);
}
function addDrivers(){
	return DB.Drivers.bulkCreate(driversArray);
}



truckCreate()
	.then(addUsers)
	.then(addDrivers)
	.then(function(){
		process.exit();
});