'use strict'

const  DB = require('../models').models;

console.log('test');

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
function addDrivers(){
	return DB.Drivers.bulkCreate(driversArray);
}

truckCreate()
	.then(addDrivers)
	.then(function(){
		process.exit();
});