const express = require('express');
const { getAllCars } = require('../controllers/car-controller.js');
const carRouter = express.Router();


carRouter.get("/", getAllCars);

module.exports.carRouter = carRouter;