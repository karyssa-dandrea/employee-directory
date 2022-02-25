import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getProfile } from '../services/profiles';

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (error) {
        history.replace('/profile/create');
      }
      setLoading(false);
    };
    fetchData();
  }, [history]);

  const profileValue = { profile, setProfile, loading, setLoading };

  return <ProfileContext.Provider value={profileValue}>{children}</ProfileContext.Provider>;
};

const useProfile = () => {
  const context = useContext(ProfileContext);

  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

export { ProfileProvider, useProfile };
