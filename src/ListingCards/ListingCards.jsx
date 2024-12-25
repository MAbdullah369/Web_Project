import React from 'react';
import './ListingCards.css';

const ListingCards = ({ title, location, price, distance, date, rating, image }) => {
    return (
        <div
            className="listing-card"
            style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '8px',
                maxWidth: '30.7%',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
        >
            <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
                <img
                    src={image}
                    alt={title}
                    style={{ width: '100%', height: '250px', width: '405px', display: 'block' }}
                />
            </div>
            <div style={{ border:'none',padding: '10px 0', textAlign: 'left' }}>
            <p style={{ display: 'flex', float: 'right',marginTop:'9px', gap: '5px',fontWeight:'inherit', fontSize: '16px', color: '#333' }}>
                    <span>⭐ {rating}</span>
                </p>
                <h3 style={{ margin: '10px 0', fontSize: '18px', fontWeight: 'bold' }}>{location}</h3>
                <p style={{ color: '#777', marginBottom: '5px' }}>{distance}</p>
                <p style={{ color: '#777', marginBottom: '5px' }}>{date}</p>
                <p style={{ marginBottom: '10px' }}>
                    <strong>${price}</strong> / night
                </p>
               
                <button>Book Me</button>
            </div>
        </div>
    );
};

export default ListingCards;
