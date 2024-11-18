const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Import listings data
const listings = require('./data/listings.json');

// API Endpoints
app.get('/api/listings', (req, res) => {
  res.json(listings);
});

app.post('/api/book', (req, res) => {
  const { listingId, user } = req.body;
  // Logic to handle booking (mock response)
  res.status(201).json({ message: 'Booking successful', listingId, user });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
