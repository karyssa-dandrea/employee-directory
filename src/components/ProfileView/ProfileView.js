import React from 'react';

export default function ProfileView({ profile }) {
  // const {
  //   profile: { name, email, birthday, bio },
  //   loading,
  // }
  const handleSubmit = () => {
    history.push('/profile/edit');
  };

  return (
    <div>
      <h2>About You:</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Birthday: {profile.birthday}</p>
      <p>Bio: {profile.bio}</p>
      <button onClick={handleSubmit}>Edit</button>
    </div>
  );
}
