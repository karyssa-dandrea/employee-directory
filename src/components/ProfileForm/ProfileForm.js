import React from 'react';
import { useProfile } from '../../context/ProfileContext';

export default function ProfileForm({ handleCreate, handleEdit, updateProfileForm }) {
  const { profile } = useProfile();
  const { name, email, birthday, bio } = profile;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      handleCreate(name, email, birthday, bio);
    } else {
      handleEdit(name, email, birthday, bio);
    }
  };

  return (
    <form>
      {!profile.name && <h3>You must create a profile to continue!</h3>}
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => updateProfileForm('name', e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => updateProfileForm('email', e.target.value)}
        />
      </label>
      <label>
        Birthday:
        <input
          type="date"
          value={birthday}
          onChange={(e) => updateProfileForm('date', e.target.value)}
        />
      </label>
      <label>
        Bio:
        <textarea value={bio} onChange={(e) => updateProfileForm('bio', e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
