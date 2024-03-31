const express = require('express');
const router = express.Router();
const weatherService = require('../services/weatherService');

router.get('/', async (req, res) => {
    try {
        const { lat, lon } = req.query;
        const weatherData = await weatherService.getWeather(lat, lon);
        res.json(weatherData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;