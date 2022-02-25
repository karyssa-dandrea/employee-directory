import { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
};

const useProfile = () => {
  const context = useContext(ProfileContext);

  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

export { ProfileProvider, useProfile };
