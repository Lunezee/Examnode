const express = require('express');
const ClientController = require('../controllers/clientController');

const router = express.Router();
const clientController = new ClientController();

// Route to register a client
router.post('/register', clientController.registerClient.bind(clientController));

// Route to list all registered clients
router.get('/', clientController.listClients.bind(clientController));

// Route to search for a specific client
router.get('/search', clientController.searchClient.bind(clientController));

module.exports = router;