/* eslint-disable no-useless-catch */
import React from 'react';
import { useHistory } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';
import { useUser } from '../../context/UserContext';
import { signInUser, signUpUser } from '../../services/users';

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const { setUser } = useUser();

  const handleLogin = async (email, password) => {
    try {
      if (isSigningUp) {
        await signUpUser(email, password);
        history.replace('/confirm-email');
      } else {
        const resp = await signInUser(email, password);
        setUser({ id: resp.id, email: resp.email });
        history.replace('/profile');
      }
    } catch (error) {
      throw error;
    }
  };

  return <UserForm onSubmit={handleLogin} label={isSigningUp ? 'Sign Up' : 'Sign In'} />;
}
