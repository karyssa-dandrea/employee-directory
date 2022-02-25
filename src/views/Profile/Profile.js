import React from 'react';
import { useHistory } from 'react-router-dom';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import ProfileView from '../../components/ProfileView/ProfileView';
import { useProfile } from '../../context/ProfileContext';
import { createProfile, updateProfile } from '../../services/profiles';

export default function Profile({ isCreatingProfile = false }) {
  const { profile, setProfile, loading, setLoading } = useProfile();
  const history = useHistory();

  const handleCreate = async (name, email, birthday, bio) => {
    try {
      const data = await createProfile({ name, email, bio, birthday });
      setProfile(data);
      history.replace('/profile');
    } catch (error) {
      throw new Error('Something went wrong! Make sure all fields are correct');
    }
  };

  const handleEdit = async (name, email, bio, birthday) => {
    try {
      const [data] = await updateProfile({ name, email, bio, birthday });
      setProfile(data);
      history.push('/profile');
    } catch (error) {
      throw new Error('Something went wrong! Please try again.');
    }
  };

  if (loading) return <h2>Loading Profile..</h2>;

  return (
    <div>
      {profile ? (
        <ProfileView profile={profile} />
      ) : (
        <ProfileForm profile={profile} handleCreate={handleCreate} handleEdit={handleEdit} />
      )}
    </div>
  );
}
