const request = require('supertest');
const app = require('../../src/app');
const axios = require("axios");

describe('Currency Conversion API - Integration Tests', () => {
    it('should convert currency successfully', async () => {
        const response = await request(app)
            .get('/api/convert')
            .query({ from: 'USD', to: 'EUR', amount: 100 });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('from', 'USD');
        expect(response.body).toHaveProperty('to', 'EUR');
        expect(response.body).toHaveProperty('amount', "100");
        expect(response.body).toHaveProperty('convertedAmount');
    });

    it('should return 400 if required parameters are missing', async () => {
        const response = await request(app)
            .get('/api/convert')
            .query({ from: 'USD', to: 'EUR' }); // Missing 'amount'

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Missing required parameters: from, to, amount');
    });

    it('should return 500 if the external API fails', async () => {
        // Mock the external API to fail
        jest.spyOn(axios, 'get').mockRejectedValue(new Error('API Error'));

        const response = await request(app)
            .get('/api/convert')
            .query({ from: 'USD', to: 'EUR', amount: 100 });

        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('message', 'Something went wrong!');
    });
});