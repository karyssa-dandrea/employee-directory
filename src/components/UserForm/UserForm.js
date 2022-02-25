import React, { useState } from 'react';
import useForm from '../../hooks/useForm';

export default function UserForm({ label, onSubmit }) {
  const { formState, formError, handleFormChange, setFormError } = useForm({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;

    try {
      if (!email || password.length < 8)
        throw new Error('An email and password (with 8+ characters) are required.');
      setLoading(true);
      await onSubmit(email, password);
    } catch (error) {
      setLoading(false);
      setFormError(error.message);
    }
  };
  return (
    <>
      {loading ? 'Loading' : ''}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleFormChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formState.password}
          onChange={handleFormChange}
        />
        <button type="submit">{label}</button>
        {formError && <p>{formError}</p>}
      </form>
    </>
  );
}
