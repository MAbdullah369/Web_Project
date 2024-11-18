import React, { useEffect, useState } from 'react';
import { getListings, bookListing } from '../api'; // Import the API functions

const Listings = () => {
  const [listings, setListings] = useState([]); // State to store listings
  const [error, setError] = useState(null); // State to handle errors
  const [loading, setLoading] = useState(true); // State to handle loading state

  // Fetch listings on component load
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        const data = await getListings();
        if (Array.isArray(data) && data.length > 0) {
          setListings(data); // Update state with fetched data
          setError(null); // Reset errors
        } else {
          setListings([]); // Ensure it's an empty array if no listings found
          setError(null); // Clear any previous error messages
        }
      } catch (err) {
        console.error('Error fetching listings:', err);
        setError('Failed to load listings. Please try again later.');
      } finally {
        setLoading(false); // Stop loading
      }
    };
    fetchData();
  }, []);

  // Function to handle booking
  const handleBooking = async (listingId) => {
    try {
      const response = await bookListing(listingId, { name: 'John Doe' });
      alert(response.message); // Show success message
    } catch (err) {
      console.error('Error booking listing:', err);
      alert('Failed to book the listing. Please try again later.');
    }
  };

  return (
    <div>
      {/* Only render title if there are listings */}
      {listings.length > 0 && <h1>Property Listings</h1>}

      {/* Loading State */}
      {loading && <p>Loading listings...</p>}

      {/* Error State */}
      {error && !loading && (
        <p style={{ color: 'red' }}>{error}</p>
      )}

      {/* Listings */}
      {!loading && !error && listings.length > 0 && (
        <ul>
          {listings.map((listing) => (
            <li key={listing.id} style={{ marginBottom: '10px' }}>
              <strong>{listing.name}</strong> - {listing.location} - ${listing.price}
              <button
                onClick={() => handleBooking(listing.id)}
                style={{ marginLeft: '10px', cursor: 'pointer' }}
              >
                Book
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Listings;
