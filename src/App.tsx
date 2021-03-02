import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Latest from './containers/Latest';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/latest' exact component={Latest} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;


