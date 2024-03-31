const request = require('supertest');
const app = require('../../src/app'); 

describe('GET /api/weather', () => {
    it('returns an error for missing query parameters', async () => {
        const response = await request(app)
          .get('/api/weather')
          .expect('Content-Type', /json/)
          .expect(400);
    
        expect(response.body).toHaveProperty('message', 'Latitude and longitude are required.');
      });
    
    it('returns weather data for valid requests', async () => {
        const response = await request(app)
          .get('/api/weather?lat=40.712776&lon=-74.005974')
          .expect('Content-Type', /json/)
          .expect(200);
    
        // Validate the structure of your weather data response
        expect(response.body).toEqual({
          temperature: expect.any(Number),
          condition: expect.any(String),
          temperatureStatus: expect.any(String),
          alerts: expect.any(Array)
        });
    });
    
    it('handles unexpected input types', async () => {
        const response = await request(app)
          .get('/api/weather?lat=forty&lon=-seventy-four')
          .expect('Content-Type', /json/)
          .expect(400);
    
        expect(response.body).toHaveProperty('message', 'Latitude and longitude must be valid numbers.');
    });
});

