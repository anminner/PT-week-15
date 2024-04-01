import React, { useEffect, useState } from 'react';
import { fetchHouses } from './api';
import HouseItem from './HouseItem';

const HouseList = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchHouses();
        setHouses(data);
      } catch (error) {
        // Handle error
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {houses.map((house) => (
        <HouseItem key={house.id} house={house} />
      ))}
    </div>
  );
};

export default HouseList;