const mongoose = require('mongoose');


const CakeSchema = new mongoose.Schema({
	baker: { type:String, required: true, default: "BakerMan" },
	description: { type:String, required: true, default: "Delicious Cake!"},
	vegan: { type:Boolean, default: true},
	glutenfree: { type:Boolean, default: true},
	image: { type: String},
	reviews: 
		{type:[{ rating: {type: Number}, 
		comments: {type: String}}], 
		maxlength: 5}
	}, {timestamps: true});

module.exports = mongoose.model('Cake', CakeSchema)