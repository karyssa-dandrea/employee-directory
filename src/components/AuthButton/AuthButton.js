import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/users';

export default function AuthButton() {
  const { user, setUser } = useUser();
  return (
    <>
      {user?.email ? (
        <button
          onClick={async () => {
            await signOutUser();
            setUser({});
          }}
        >
          Sign Out
        </button>
      ) : (
        <Link to="/login">
          <button>Sign In</button>
        </Link>
      )}
    </>
  );
}
