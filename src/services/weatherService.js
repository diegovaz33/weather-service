const axios = require('axios');
const { openWeatherApiKey } = require('../config');
const utils = require('../utils');

const BASE_URL = 'https://api.openweathermap.org/data/3.0/onecall';

const getWeather = async (latitude, longitude) => {
    try {
        const response = await axios.get(`${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${openWeatherApiKey}&units=metric`)
        return utils.processWeatherData(response.data);
    } catch (error) {
        throw new Error('Failed to retrieve data')
    }
};

module.exports = { getWeather };