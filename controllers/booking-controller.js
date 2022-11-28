const mongoose = require('mongoose');
const Booking = require('../models/Booking.js');
const Car = require('../models/Car.js');
const User = require('../models/User.js');


module.exports.bookACar = async (req, res) => {


    req.body.transactionID = Math.floor((Math.random() * 1000000000)).toString();


    if (req.id !== req.body.user) {
        return res.status(400).json({ message: 'Un-Autharized Access' });
    }

    let newBooking;
    try {
        let totalAmount = req.body.totalAmount;
        newBooking = new Booking(req.body);
        let car = await Car.findById(req.body.car);
        let user = await User.findById(req.body.user);
        //Start Transaction
        const session = await mongoose.startSession();
        session.startTransaction({ session });
        newBooking = await newBooking.save({ session });
        car.bookedTimeSlots.push(req.body.bookedTimeSlots);
        car = await car.save({ session });
        user.wallet = user.wallet - totalAmount;
        user = await user.save({ session });
        await session.commitTransaction();
        //End Transaction
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: `This transaction has failed due to: ${err}` });
    }

    return res.status(200).json({ message: 'Booking Sucesfull', newBooking });
}