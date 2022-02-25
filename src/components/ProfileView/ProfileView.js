import React from 'react';
import { useProfile } from '../../context/ProfileContext';

export default function ProfileView() {
  const {
    profile: { name, email, birthday, bio },
    loading,
  } = useProfile();

  const handleSubmit = () => {
    history.push('/profile/edit');
  };
  if (loading) return <h3>Loading Profile..</h3>;
  return (
    <div>
      <h2>About You:</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Birthday: {birthday}</p>
      <p>Bio: {bio}</p>
      <button onClick={handleSubmit}>Edit</button>
    </div>
  );
}
