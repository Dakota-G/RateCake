const logic = require('../controllers/logic')

module.exports = function(app) {
	app.get('/cakes', (req, res) => {
		logic.readAll(req, res);
	}),
	app.get('/cake/:id', (req, res) => {
		logic.readOne(req, res);
	}),
	app.post('/cakes', (req, res) => {
		logic.create(req, res);
	}),
	app.put('/cakes/:id', (req, res) => {
		console.log("Put request going through!");
		logic.update(req, res);
	}),
	app.delete('/cakes/:id', (req, res) => {
		logic.destroy(req, res);
	})
}