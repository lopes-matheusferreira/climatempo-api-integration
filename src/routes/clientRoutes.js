// clientRoutes.js
const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

// Rota para obter o clima usando city
router.get('/weather/:city', clientController.getWeather);

module.exports = router;
