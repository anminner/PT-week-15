const API_URL = 'https://api.example.com/houses';

export const fetchHouses = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch houses');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching houses:', error);
    throw error;
  }
};

export const addHouse = async (houseData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(houseData),
    });
    if (!response.ok) {
      throw new Error('Failed to add house');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding house:', error);
    throw error;
  }
};