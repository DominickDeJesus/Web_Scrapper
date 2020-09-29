import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { AppContextProvider } from './context/AppContext';
function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </AppContextProvider>
  );
}

export default App;
