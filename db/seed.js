'use strict'

const  DB = require('../models').models;

// console.log('test');

// Users for the DB
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

// Drivers
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

// Create Trucks
function truckCreate(){
	return DB.Trucks.bulkCreate(trucksArray);
}
// Create Drivers
function addDrivers(){
	return DB.Drivers.bulkCreate(driversArray);
}

truckCreate()
	.then(addDrivers)
	.then(function(){
		process.exit();
});