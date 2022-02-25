import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import { UserProvider } from './context/UserContext';
import Profile from './views/Profile/Profile';
import { ProfileProvider } from './context/ProfileContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ProfileForm from './components/ProfileForm/ProfileForm';

function App() {
  return (
    <UserProvider>
      <ProfileProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/login">
              <Auth />
            </Route>
            <Route exact path="/register">
              <Auth isSigningUp />
            </Route>
            <PrivateRoute path="/profile/create">
              <Profile isCreatingProfile />
            </PrivateRoute>
            <PrivateRoute path="/profile/edit">
              <Profile />
            </PrivateRoute>
            <PrivateRoute exact path="/profile">
              <Profile isNotEditing />
            </PrivateRoute>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ProfileProvider>
    </UserProvider>
  );
}

export default App;
