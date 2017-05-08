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

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.destroy = destroy;