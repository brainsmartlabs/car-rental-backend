const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cars'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    bookedTimeSlots: {
        from: { type: String, required: true },
        to: { type: String, required: true }
    },
    totalDays: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    transactionID: { type: String, required: true }
},
    { timestamps: true }
);

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;

