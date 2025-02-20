const currencyService = require('../services/currencyService');

const convertCurrency = async (req, res, next) => {
    try {
        const { from, to, amount } = req.query;

        if (!from || !to || !amount) {
            return res.status(400).json({ message: 'Missing required parameters: from, to, amount' });
        }

        const convertedAmount = await currencyService.convertCurrency(from, to, amount);
        res.json({ from, to, amount, convertedAmount });
    } catch (error) {
        next(error);
    }
};

module.exports = { convertCurrency };