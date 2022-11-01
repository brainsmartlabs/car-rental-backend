const express = require('express');
const { getAllCars } = require('../controllers/CarsController.js');
const carsRouter = express.Router();


carsRouter.get("/", getAllCars);

module.exports.carsRouter = carsRouter;