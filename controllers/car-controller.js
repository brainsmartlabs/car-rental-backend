const Car = require('../models/Car.js');

module.exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find({});
        res.status(200).json({ cars })
    } catch (err) {
        return console.log(err);
    }
}