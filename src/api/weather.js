const express = require('express');
const router = express.Router();
const weatherService = require('../services/weatherService');

router.get('/', async (req, res) => {
    const { lat, lon } = req.query;
  
    if (!lat || !lon) {
      return res.status(400).json({ message: "Latitude and longitude are required." });
    }
  
    if (isNaN(lat) || isNaN(lon)) {
      return res.status(400).json({ message: "Latitude and longitude must be valid numbers." });
    }
  
    try {
      const weatherData = await weatherService.getWeather(lat, lon);
      res.json(weatherData);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});
  

module.exports = router;