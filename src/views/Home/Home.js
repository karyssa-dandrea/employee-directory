import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <h2>Welcome to The Hive of Honex Industries!</h2>
      <p> Welcome to the workforce! Once your job is picked, that is your job forever!</p>
      <p>
        Please create a profile with a description of yourself for the other bee workers to get to
        know you!
      </p>
      <p>
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </p>
    </main>
  );
}
