const express = require('express');
const RentalController = require('../controllers/rentalController');

const router = express.Router();
const rentalController = new RentalController();

// Route to rent a vehicle
router.post('/rent', rentalController.rentVehicle);

// Route to list clients who have rented a specific vehicle
router.get('/vehicle/:vehicleId/clients', rentalController.listClientsByVehicle);

// Route to list vehicles rented by a specific client
router.get('/client/:clientId/vehicles', rentalController.listVehiclesByClient);

// Route to return a vehicle
router.post('/return', rentalController.returnVehicle);

module.exports = router;