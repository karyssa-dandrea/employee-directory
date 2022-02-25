import React from 'react';
import { useUser } from '../../context/UserContext';
import AuthButton from '../AuthButton/AuthButton';
import './Header.css';

export default function Header() {
  const { user } = useUser();
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
      </header>
    </>
  );
}
