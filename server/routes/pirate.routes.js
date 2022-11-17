const PirateController = require('../controllers/pirate.controller');

module.exports = (app) => {
    app.get('/api/pirates', PirateController.getAllPirates);
    app.get('/api/pirates/:id', PirateController.getOnePirate);
    app.post('/api/pirates', PirateController.createPirate);
    app.delete('/api/pirates/:id', PirateController.deletePirate);
};