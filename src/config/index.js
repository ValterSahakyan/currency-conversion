require('dotenv').config();

module.exports = {
    currencyLayerApiKey: process.env.EXCHANGE_RATE_API_KEY,
    port: process.env.PORT || 3000,
};