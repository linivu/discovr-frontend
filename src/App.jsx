import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// COMPONENTS //
import Header from './components/layout/Header';
import LandingPage from './pages/LandingPage';

// STYLES //
import './App.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
};

export default App;
