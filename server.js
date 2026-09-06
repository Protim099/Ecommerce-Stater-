require('dotenv').config();
const express = require('express');
const cors = require('cors');

const productsRouter = require('./routes/products');
const checkoutRouter = require('./routes/checkout');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000' }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'E-commerce API is running' });
});

app.use('/api/products', productsRouter);
app.use('/api/checkout', checkoutRouter);

// Basic 404 + error handling
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
