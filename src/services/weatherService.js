const axios = require('axios');
const { openWeatherApiKey } = require('../config');
const utils = require('../utils');

const BASE_URL = 'https://api.openweathermap.org/data/3.0/onecall';

const getWeather = async (lat, lon) => {
    try {
        const response = await axios.get(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${openWeatherApiKey}&units=metric`);
        if (response.status !== 200) {
            throw new Error(`Failed to retrieve weather data: ${response.status} ${response.statusText}`);
        }
        return utils.processWeatherData(response.data);
    } catch (error) {
        if (error.response && error.response.status === 401) {
          throw new Error('Invalid API Key');
        } else if (error.response && error.response.status === 429) {
          throw new Error('API Limit Reached');
        } else {
          throw new Error('Failed to retrieve weather data');
        }
    }
};

module.exports = { getWeather };