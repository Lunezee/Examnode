const express = require('express');
const VehicleController = require('../controllers/vehicleController');

const router = express.Router();
const vehicleController = new VehicleController();

// Route to add a vehicle
router.post('/vehicles', vehicleController.addVehicle.bind(vehicleController));

// Route to list available vehicles
router.get('/vehicles', vehicleController.listAvailableVehicles.bind(vehicleController));

// Route to search for a specific vehicle
router.get('/vehicles/:id', vehicleController.searchVehicle.bind(vehicleController));

// Route to search for vehicles by brand
router.get('/vehicles/brand/:brand', vehicleController.searchVehicleByBrand.bind(vehicleController));

module.exports = router;