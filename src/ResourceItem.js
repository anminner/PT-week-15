import React from 'react';

const ResourceItem = ({ resource, onDeleteResource }) => {
  const handleDelete = () => {
    onDeleteResource(resource.id);
  };

  return (
    <div>
      <h3>{resource.title}</h3>
      <p>{resource.body}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ResourceItem;
