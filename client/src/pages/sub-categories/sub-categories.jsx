import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  let { id } = useParams();

  return (
    <div>
      <h2>Profile Details</h2>
      <p>Displaying information for Profile {id}</p>
    </div>
  );
};

export default Profile;