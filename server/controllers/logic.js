const mongoose = require('mongoose');
const Cake = require('../models/schemas.js')

module.exports = {
	readAll: function(req, res) {
		Cake.find()
			.then(data => res.json(data))
			.catch(err => res.json(err));
	},
	readOne: function(req, res) {
		Cake.findOne({_id: req.params.id})
			.then(data => res.json(data))
			.catch(err => res.json(err));
	},
	update: function(req, res) {
		console.log("got to update!")
		Cake.findOneAndUpdate({_id: req.params.id}, {$addToSet: {reviews: req.body}})
			.then(data => {
				data.save()
					.then(data => res.json({message: "Success!", results: data}))
					.catch(err => res.json({message: "Failed!", results: err}))
			})
	},
	create: function(req, res) {
		let cake = new Cake ();
		Cake.create(req.body)
			.then(() => res.json({message: "Success!", created: true}))
			.catch(err => res.json(err));
	},
	destroy: function(req, res) {
		Cake.deleteOne({_id: req.params.id})
		.then(() => res.json({message: "Success!", deleted: true}))
		.catch(err => res.json(err));
	},
}