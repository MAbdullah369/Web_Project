import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getListings = async () => {
  const response = await axios.get(`${API_URL}/listings`);
  return response.data;
};

export const bookListing = async (listingId, user) => {
  const response = await axios.post(`${API_URL}/book`, { listingId, user });
  return response.data;
};
