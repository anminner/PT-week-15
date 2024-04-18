import React, { useState, useEffect } from 'react';
import ResourceForm from './ResourceForm';
import ResourceItem from './ResourceItem';

const ResourceList = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setResources(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddResource = (newResource) => {
    setResources([...resources, newResource]);
  };

  const handleDeleteResource = (id) => {
    setResources(resources.filter(resource => resource.id !== id));
  };

  return (
    <div>
      <h2>Resources</h2>
      <ResourceForm onAddResource={handleAddResource} />
      <div>
        {resources.map(resource => (
          <ResourceItem key={resource.id} resource={resource} onDeleteResource={handleDeleteResource} />
        ))}
      </div>
    </div>
  );
};

export default ResourceList;
