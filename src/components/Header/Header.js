import React from 'react';
import { useUser } from '../../context/UserContext';
import AuthButton from '../AuthButton/AuthButton';

export default function Header() {
  const { user } = useUser();
  return (
    <>
      <header>
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
      </header>
    </>
  );
}
