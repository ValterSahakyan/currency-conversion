const { convertCurrency } = require('../../src/services/currencyService');
const axios = require('axios');

jest.mock('axios');

describe('Currency Service - Unit Tests', () => {
    it('should convert currency successfully', async () => {
        // Mock response from CurrencyLayer API
        axios.get.mockResolvedValue({
            data: {
                success: true,
                result: 85.0,
            },
        });

        const from = 'USD';
        const to = 'EUR';
        const amount = 100;

        const result = await convertCurrency(from, to, amount);

        expect(result).toBe(85.0);
        expect(axios.get).toHaveBeenCalledWith(
            expect.stringContaining(`from=${from}&to=${to}&amount=${amount}`)
        );
    });
});