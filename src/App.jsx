import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// COMPONENTS //
import LandingPage from './pages/LandingPage';

// STYLES //
import './App.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
};

export default App;
