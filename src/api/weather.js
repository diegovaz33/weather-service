const express = require('express');
const router = express.Router();
const weatherService = require('../services/weatherService');

router.get('/', async (req, res) => {
    try {
        const { latitude, longitude } = req.query;
        const weatherData = await weatherService.getWeather(latitude, longitude);
        res.json(weatherData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;