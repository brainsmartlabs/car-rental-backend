const express = require('express');
const { bookACar } = require('../controllers/booking-controller');
const { verifyToken } = require('../middlewares/verify-token');
const bookingRouter = express.Router();

//bookingRouter.get("/", getAllCars);
bookingRouter.post("/bookACar", verifyToken, bookACar);

module.exports.bookingRouter = bookingRouter;