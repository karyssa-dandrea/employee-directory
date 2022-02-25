import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import { UserProvider } from './context/UserContext';
import Profile from './views/Profile/Profile';
import { ProfileProvider } from './context/ProfileContext';

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
            <Route path="/profile/create">
              <Profile isCreatingProfile />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
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
