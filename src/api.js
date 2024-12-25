// api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// Fetch listings
export const getListings = async () => {
  try {
    const response = await axios.get(`${API_URL}/listings`);
    return response.data;
  } catch (error) {
    console.error('Error fetching listings:', error);
    throw error;
  }
};

// Book a listing
export const bookListing = async (listingId, user) => {
  try {
    const response = await axios.post(`${API_URL}/book`, {
      listingId,
      user,
    });
    return response.data;
  } catch (error) {
    console.error('Error booking listing:', error);
    throw error;
  }
};
