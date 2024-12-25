const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');
const PORT = 5000;

// Enable CORS to allow frontend and backend communication
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Path to the listings data
const dataPath = path.join(__dirname, 'data', 'listings.json');

// GET endpoint to fetch all listings
app.get('/api/listings', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to load listings' });
        }
        res.json(JSON.parse(data));
    });
});

app.post('/Booking', (req, res) => {
    const { propertyId, checkIn, checkOut } = req.body;

    if (!propertyId || !checkIn || !checkOut) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const property = listings.find((item) => item.id === propertyId);

    if (!property) {
        return res.status(404).json({ message: 'Property not found.' });
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkOutDate <= checkInDate) {
        return res.status(400).json({ message: 'Check-out date must be after check-in date.' });
    }

    const numberOfNights = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
    const totalPrice = property.price * numberOfNights;

    res.status(200).json({
        message: 'Booking confirmed!',
        bookingDetails: {
            title: property.title,
            checkIn,
            checkOut,
            totalPrice,
        },
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
