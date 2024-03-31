const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { getWeather } = require('../../src/services/weatherService');
const { openWeatherApiKey } = require('../../src/config');

const mock = new MockAdapter(axios);

// Use case for fetching and processing data
describe('weatherService', () => {
    it('fetched and processes weather data correctly', async () => {
        const mockData = {
            current : {
                temp: 15,
                weather: [{main: 'Clouds'}],
            },
            alerts: []
        };

        mock.onGet(`https://api.openweathermap.org/data/3.0/onecall?lat=40.712776&lon=-74.005974&appid=${openWeatherApiKey}&units=metric`).reply(200, mockData);

        const weather = await getWeather(40.712776, -74.005974);
        expect(weather.temperature).toBe(15);
        expect(weather.condition).toBe('Clouds');
        expect(weather.temperatureStatus).toBe('moderate');
        expect(weather.alerts).toEqual([]);
    });

    it('handles network errors gracefully', async () => {
        mock.onGet(`https://api.openweathermap.org/data/3.0/onecall?lat=40.712776&lon=-74.005974&appid=${openWeatherApiKey}&units=metric`).networkError();
      
        await expect(getWeather(40.712776, -74.005974)).rejects.toThrow('Failed to retrieve weather data');
      });
      
    it('handles non-200 status codes from the API', async () => {
        mock.onGet(`https://api.openweathermap.org/data/3.0/onecall?lat=40.712776&lon=-74.005974&appid=${openWeatherApiKey}&units=metric`).reply(500, { message: 'Internal Server Error' });
      
        await expect(getWeather(40.712776, -74.005974)).rejects.toThrow('Failed to retrieve weather data');
    });

});

describe('temperature category edge cases', () => {
    const testCases = [
      { temp: -1, expected: 'cold' },
      { temp: 0, expected: 'cold' },
      { temp: 15, expected: 'moderate' },
      { temp: 25, expected: 'hot' },
    ];
  
    testCases.forEach(({ temp, expected }) => {
      it(`categorizes ${temp} degrees as ${expected}`, async () => {
        mock.onGet(`https://api.openweathermap.org/data/3.0/onecall?lat=40.712776&lon=-74.005974&appid=${openWeatherApiKey}&units=metric`).reply(200, {
          current: {
            temp,
            weather: [{ main: 'Clear' }],
          },
          alerts: []
        });
  
        const weatherData = await getWeather(40.712776, -74.005974);
        expect(weatherData.temperatureStatus).toEqual(expected);
      });
    });
  });
  