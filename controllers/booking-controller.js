const mongoose = require('mongoose');
const Booking = require('../models/Booking.js');
const Car = require('../models/Car.js');


module.exports.bookACar = async (req, res) => {


    req.body.transactionID = Math.floor((Math.random() * 1000000000)).toString();

    if (req.id !== req.body.user) {
        return res.status(400).json({ message: 'Un-Autharized Access' });
    }

    let newBooking;
    try {
        newBooking = new Booking(req.body);
        let car = await Car.findById(req.body.car);
        const session = await mongoose.startSession();
        session.startTransaction({ session });
        newBooking = await newBooking.save({ session });
        car.bookedTimeSlots.push(req.body.bookedTimeSlots);
        car = await car.save({ session });
        await session.commitTransaction();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: `This transaction has failed due to: ${err}` });
    }

    return res.status(200).json({ message: 'Booking Sucesfull', newBooking });
}