import React, { useEffect, useState } from 'react';
import ListingCards from '../ListingCards/ListingCards';

const Listings = () => {
    const [listings, setListings] = useState([]); // State to store fetched listings

    // Fetch listings from the backend API
    useEffect(() => {
        fetch('http://localhost:5000/api/listings') // Backend API endpoint
            .then((response) => response.json())
            .then((data) => setListings(data)) // Save the data in the state
            .catch((error) => console.error('Error fetching listings:', error));
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {listings.length > 0 ? (
                listings.map((listing) => (
                    <ListingCards
                        key={listing.id}
                        title={listing.title}
                        description={listing.description}
                        price={listing.price}
                        location={listing.location}
                        rating={listing.rating}
                        distance={listing.distance}
                        date={listing.date}
                        image={listing.image}
                    />
                ))
            ) : (
                <p>Loading listings...</p>
            )}
        </div>
    );
};

export default Listings;
