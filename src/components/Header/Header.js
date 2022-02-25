import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useProfile } from '../../context/ProfileContext';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/users';
import AuthButton from '../AuthButton/AuthButton';
import './Header.css';

export default function Header() {
  const { user, setUser } = useUser();

  const { setProfile } = useProfile();
  const history = useHistory();

  const handleClick = () => {
    history.push('/login');
  };

  const handleLogout = async () => {
    await signOutUser();
    setUser({});
    setProfile({});
  };

  return (
    <>
      <header>
        <img src="./assets/bees.webp" />
        <h1> Honex Industries</h1>
        <p>
          {user?.email ? (
            <>
              <span>Signed in as</span>
              <span> {user?.email}</span>
            </>
          ) : (
            <span>Not Signed In</span>
          )}
          <AuthButton />;
        </p>
        {!user.email && <button onClick={handleClick}>Log In</button>}
        {user.email && <button onClick={handleLogout}>Log Out</button>}
      </header>
    </>
  );
}
