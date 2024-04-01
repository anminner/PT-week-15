import React from 'react';

const HouseItem = ({ house }) => {
  const handleDelete = async () => {
    try {
      
    } catch (error) {
      
    }
  };

  return (
    <div>
      <h2>{house.name}</h2>
      <p>{house.description}</p>
      <button onClick={handleDelete}>Delete</button>
      {/* Add update functionality */}
    </div>
  );
};

export default HouseItem;
