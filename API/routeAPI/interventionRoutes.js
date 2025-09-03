// routes/interventionRoutes.js
const express = require('express');
const router = express.Router();
const interventionController = require('../controllerAPI/InterventionController');

// CRUD routes
router.post('/interventions', interventionController.createIntervention);
module.exports = router;
