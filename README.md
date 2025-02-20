# Currency Conversion API

This project is a **Currency Conversion API** built using **Node.js** and the **CurrencyLayer API**. It allows users to convert an amount from one currency to another by making a GET request to the `/api/convert` endpoint. The API fetches real-time exchange rates from CurrencyLayer and returns the converted amount.

---

## Features
- Convert an amount from one currency to another.
- Uses real-time exchange rates from the CurrencyLayer API.
- Built with best practices: modular code, error handling, environment variables, and logging.
- Interactive API documentation using **Swagger UI**.

---

## Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v20 or higher)
- A **CurrencyLayer API key** (sign up at [CurrencyLayer](https://currencylayer.com))

---

## Setup and Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/currency-conversion-api.git
   cd currency-conversion-api
2. **Npm install**:
   ```bash
   npm install
3. **cp .env.local .env**:

## Start
1. **Run server**:
   ```bash
   npm start
## Test
1. :
   ```bash
   npm run test
2. :
   ```bash
   npm run test:integration
3. :
   ```bash
   npm run test:unit