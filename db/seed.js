'use strict'

const  DB = require('../models').models;

const trucks = [];

const truckCreate = function(){
	return DB.Truck.create(
	{
		name: 'carls jr.',
		img_link: 'http://www.carlsjr.co.nz/getattachment/62a7e415-c20a-4aed-8ffd-468ce9437dac/memphis-bbq/',
		description: 'not a truck',
		food_type: 'burgers',
		menu_link: 'www.carlsjr.com',
		phone: '123',
		latitude:1111,
		longitude:2222
	},
	{
		name: 'InNOut',
		img_link: 'http://static3.businessinsider.com/image/55fc68f7bd86ef11008bb735/in-n-out-president-explains-why-the-burger-chain-probably-wont-expand-to-the-east-coast.jpg',
		description: 'in n out',
		food_type: 'burgers',
		menu_link: 'www.carlsjr.com',
		phone: '456',
		latitude:3333,
		longitude:4444
	});
};

truckCreate()
.then(()=>{
	process.exit();
});