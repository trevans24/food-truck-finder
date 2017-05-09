var db = require('../models');
var Trucks = db.models.Trucks;

function index(req, res) {
	Trucks.findAll().then(function(fts) {
		res.json(fts);
	});
}

function show(req,res){
	Trucks.findById(req.params.id).then(function(ft){
		res.json(ft);
	});
}

function create(req,res){
	Trucks.create(req.body).then(function(truck){
		res.json(truck);
	});
}

function destroy(req,res){
	Trucks.findById(req.params.id).then(function(truck){
		res.json(truck);
		return truck.destroy();
	});
}

function update(req,res){
	Trucks.findById(req.params.id).then(function(ftchange){
		
		return ftchange.updateAttributes(req.body);
	})
	.then(function(ftchange){
		res.json(ftchange);
	});
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.destroy = destroy;
module.exports.update = update;

// maybe a way to mass export all functions from controller???
// module.exports = {
// 	index: index,
// 	show: show,
// 	create: create,
// 	destroy: destroy
// };