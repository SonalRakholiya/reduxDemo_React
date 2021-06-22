import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import NavBar from './Component/NavBar/Navbar.js'
import Register from './Component/Register'
import Login from './Component/Login'
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
