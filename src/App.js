import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
// import { Route, Router } from 'react-router-dom';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/login">
            <Auth />
          </Route>
          <Route exact path="/register">
            <Auth isSigningUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
