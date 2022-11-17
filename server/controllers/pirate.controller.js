const Pirate = require('../models/pirate.model.js');

module.exports = {
    createPirate: (req, res) => {
        console.log(req.body);
        const newPirate = new Pirate(req.body);
        newPirate.save()
            .then((pirate) => {
                res.status(200).json(pirate);
            }
            )
            .catch((err) => {
                res.status(500).json(err);
                console.log(err);
            }
            );
    },

    getAllPirates: (req, res) => {
            Pirate.find()
                .then((allPirates) => {
                    res.json(allPirates);
                    })
                .catch((err) => {
                    res.status(400).json({ message: 'Something went wrong when getting all pirates', error: err });
                });
    },

    getOnePirate: (req, res) => {
        Pirate.findOne({ _id: req.params.id })
            .then((onePirate) => {
                res.json(onePirate);
                })
            .catch((err) => {
                res.status(400).json({ message: 'Something went wrong when getting one pirate', error: err });
            });
    },

    deletePirate: (req, res) => {
        Pirate.deleteOne({ _id: req.params.id })
            .then((deletedPirate) => {
                res.json({ deletedPirate });
                })
            .catch((err) => {
                res.status(400).json({ message: 'Something went wrong when deleting pirate', error: err });
            });
    }
};