const axios = require('axios');
const config = require('../config');

const convertCurrency = async (from, to, amount) => {
    try {
        const apiKey = config.currencyLayerApiKey;
        const url = `http://apilayer.net/api/convert?access_key=${apiKey}&from=${from}&to=${to}&amount=${amount}`;

        const response = await axios.get(url);
        return response.data.result;
    } catch (error) {
        throw new Error('Failed to fetch exchange rates');
    }
};

module.exports = { convertCurrency };