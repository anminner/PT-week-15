import React from 'react';
import HouseList from './HouseList';
import CreateHouseForm from './CreateHouseForm';

const App = () => {
  return (
    <div>
      <h1>Houses</h1>
      <CreateHouseForm />
      <HouseList />
    </div>
  );
};

export default App;

