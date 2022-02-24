import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
// import { Route, Router } from 'react-router-dom';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login">
          <Auth />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
