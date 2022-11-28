const express = require('express');
const { bookACar, getAllBookings } = require('../controllers/booking-controller');
const { verifyToken } = require('../middlewares/verify-token');
const bookingRouter = express.Router();

bookingRouter.get("/", getAllBookings);
bookingRouter.post("/bookACar", verifyToken, bookACar);


module.exports.bookingRouter = bookingRouter;